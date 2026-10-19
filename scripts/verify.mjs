import { chromium } from "@playwright/test";
import assert from "node:assert/strict";
import { mkdirSync } from "node:fs";

const base = process.env.TEST_URL || "http://localhost:3000";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
const routes = [
  "/",
  "/nosotros",
  "/areas-de-practica",
  "/espacios-profesionales",
  "/equipo",
  "/instalaciones",
  "/ubicacion",
  "/contacto",
];
const titles = new Set();
const internal = new Set();
mkdirSync("test-results", { recursive: true });
try {
  for (const route of routes) {
    const response = await page.goto(base + route);
    assert.equal(response.status(), 200, route);
    assert.equal(await page.locator("h1").count(), 1, `Un h1: ${route}`);
    titles.add(await page.title());
    assert.equal(
      new URL(await page.locator("link[rel=canonical]").getAttribute("href"))
        .href,
      new URL("https://www.lexconterragroup.com" + route).href,
    );
    assert.ok(
      await page.locator("meta[name=description]").getAttribute("content"),
    );
    assert.ok(
      await page.locator('meta[property="og:title"]').getAttribute("content"),
    );
    await page.evaluate(() => document.fonts.ready);
    assert.equal(
      await page.evaluate(() => document.fonts.check("16px Inter")),
      true,
    );
    assert.equal(
      await page.evaluate(() =>
        document.fonts.check('16px "Playfair Display"'),
      ),
      true,
    );
    for (const img of await page.locator("img").all()) {
      await img.scrollIntoViewIfNeeded();
      await img.evaluate((el) => el.decode());
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    const images = await page
      .locator("img")
      .evaluateAll((imgs) =>
        imgs.map((img) => ({
          src: img.src,
          complete: img.complete,
          width: img.naturalWidth,
        })),
      );
    for (const img of images) assert.ok(img.complete && img.width > 0, img.src);
    for (const href of await page
      .locator("a[href]")
      .evaluateAll((links) => links.map((a) => a.getAttribute("href")))) {
      if (href.startsWith("/") && !href.startsWith("//")) internal.add(href);
      if (href.includes("wa.me")) {
        const url = new URL(href);
        assert.equal(url.pathname, "/51990290588");
        assert.ok(url.searchParams.get("text"));
      }
      if (href.startsWith("mailto:"))
        assert.equal(href, "mailto:lexconterragroup@gmail.com");
    }
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
      `Overflow escritorio: ${route}`,
    );
    if (route === "/")
      await page.screenshot({
        path: "test-results/inicio-desktop.png",
        fullPage: true,
      });
  }
  assert.equal(titles.size, 8);
  for (const href of internal)
    assert.equal((await page.request.get(base + href)).status(), 200, href);
  assert.equal((await page.request.get(base + "/sitemap.xml")).status(), 200);
  assert.equal((await page.request.get(base + "/robots.txt")).status(), 200);
  assert.equal((await page.goto(base + "/pagina-inexistente")).status(), 404);
  assert.ok((await page.locator("h1").innerText()).includes("No encontramos"));
  await page.goto(base);
  await page.getByRole("button", { name: "Servicios" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Áreas de práctica" })
    .click();
  await page.waitForURL("**/areas-de-practica");
  assert.equal(new URL(page.url()).pathname, "/areas-de-practica");
  assert.equal(
    await page
      .getByRole("button", { name: "Servicios" })
      .getAttribute("aria-expanded"),
    "false",
  );
  await page.setViewportSize({ width: 390, height: 844 });
  for (const route of routes) {
    await page.goto(base + route);
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
      `Overflow móvil: ${route}`,
    );
  }
  await page.goto(base);
  await page.getByRole("button", { name: "Abrir menú" }).click();
  await page.getByRole("button", { name: "Servicios" }).click();
  await page.screenshot({ path: "test-results/menu-mobile.png" });
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Espacios profesionales" })
    .click();
  await page.waitForURL("**/espacios-profesionales");
  assert.equal(new URL(page.url()).pathname, "/espacios-profesionales");
  assert.equal(
    await page
      .getByRole("button", { name: "Abrir menú" })
      .getAttribute("aria-expanded"),
    "false",
  );
  await page.getByRole("button", { name: "Abrir menú" }).click();
  await page.getByRole("button", { name: "Servicios" }).click();
  assert.equal(
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "Espacios profesionales" })
      .getAttribute("aria-current"),
    "page",
  );
  await page.keyboard.press("Escape");
  assert.equal(
    await page
      .getByRole("button", { name: "Abrir menú" })
      .getAttribute("aria-expanded"),
    "false",
  );
  await page.goto(base);
  await page.screenshot({
    path: "test-results/inicio-mobile.png",
    fullPage: true,
  });
  assert.deepEqual(errors, []);
  console.log(
    "PASS: 8 rutas, SEO, enlaces internos, WhatsApp, correo, fuentes, imágenes, 404, desktop, móvil y submenú.",
  );
} finally {
  await browser.close();
}
