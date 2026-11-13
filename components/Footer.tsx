import Link from "next/link";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
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
            Asesoría especializada para personas y empresas, con enfoque estratégico y compromiso profesional.
          </p>
          <span className="footer-location">LIMA, PERÚ</span>
        </div>
        <div>
          <h2>El estudio</h2>
          {[1, 4, 5, 3, 6, 7]
            .map((i) => navigation[i])
            .map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
        </div>
        <div>
          <h2>Especialidades</h2>
          {practices.map((p) => (
            <Link key={p.slug} href="/areas-de-practica">
              {p.title}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <h2>Contacto</h2>
          <p className="footer-contact-item">
            <MapPin size={16} strokeWidth={1.6} aria-hidden="true" />
            <span>{site.address}</span>
          </p>
          <a className="footer-contact-item" href="tel:+5119005261">
            <Phone size={16} strokeWidth={1.6} aria-hidden="true" />
            <span>{site.phone}</span>
          </a>
          <a className="footer-contact-item" href={whatsappUrl()}>
            <MessageCircle size={16} strokeWidth={1.6} aria-hidden="true" />
            <span>WhatsApp: {site.whatsapp}</span>
          </a>
          <a className="footer-contact-item email" href={`mailto:${site.email}`}>
            <Mail size={16} strokeWidth={1.6} aria-hidden="true" />
            <span>{site.email}</span>
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
