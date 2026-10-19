import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Brand, WhatsAppButton } from "@/components/ui";
import { site } from "@/data/site";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/playfair-display/latin-400.css";
import "@fontsource/playfair-display/latin-400-italic.css";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: site.name, template: "%s" },
  description: "Asesoría legal, empresarial y contable en Lima, Perú.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-PE">
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <div className="topbar">
          <div className="container">
            <span>ASESORÍA LEGAL & EMPRESARIAL</span>
            <a href="tel:+5119005261">
              Lima, Perú <span className="topbar-separator">|</span> (01) 900
              5261
            </a>
          </div>
        </div>
        <Header brand={<Brand />} />
        <main id="contenido">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
