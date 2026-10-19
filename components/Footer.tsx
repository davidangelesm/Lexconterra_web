import Link from "next/link";
import { Brand } from "./ui";
import { navigation, practices, site, whatsappUrl } from "@/data/site";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" aria-label="LEXCONTERRA GROUP — Inicio">
            <Brand />
          </Link>
          <p>
            Asesoría legal, empresarial y contable. Compromiso profesional con
            la protección de sus intereses.
          </p>
          <span className="footer-location">LIMA, PERÚ</span>
        </div>
        <div>
          <h2>El estudio</h2>
          {navigation
            .filter((_, i) => ![0, 2].includes(i))
            .map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
        </div>
        <div>
          <h2>Áreas de práctica</h2>
          {practices.map((p) => (
            <Link key={p.slug} href="/areas-de-practica">
              {p.title}
            </Link>
          ))}
        </div>
        <div>
          <h2>Contacto</h2>
          <p>{site.address}</p>
          <a href="tel:+5119005261">{site.phone}</a>
          <a href={whatsappUrl()}>WhatsApp: {site.whatsapp}</a>
          <a className="email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} LEXCONTERRA GROUP. Todos los derechos
          reservados.
        </span>
        <span>Ética. Estrategia. Compromiso.</span>
      </div>
    </footer>
  );
}
