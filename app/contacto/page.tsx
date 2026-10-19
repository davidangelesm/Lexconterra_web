import { MessageCircle, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui";
import { site, whatsappUrl } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
export const metadata = pageMetadata(
  "Contacto y Consultas | LEXCONTERRA GROUP",
  "Contacte a LEXCONTERRA GROUP por WhatsApp, teléfono o correo electrónico. Asesoría legal y empresarial en Lima, Perú.",
  "/contacto",
);
export default function Contacto() {
  const contacts = [
    {
      icon: MessageCircle,
      title: "Consultar por WhatsApp",
      detail: site.whatsapp,
      href: whatsappUrl(),
      note: "Inicie una conversación con nuestro equipo.",
    },
    {
      icon: Phone,
      title: "Llamar a la oficina",
      detail: site.phone,
      href: "tel:+5119005261",
      note: "Conversemos sobre su consulta.",
    },
    {
      icon: Mail,
      title: "Enviar correo electrónico",
      detail: site.email,
      href: `mailto:${site.email}`,
      note: "Escríbanos para solicitar información.",
    },
    {
      icon: MapPin,
      title: "Ver ubicación",
      detail: site.address,
      href: "/ubicacion",
      note: "Encuentre nuestra sede en Lima.",
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Contáctenos"
        description="Nuestro equipo está disponible para recibir sus consultas y brindar información sobre nuestros servicios jurídicos y empresariales."
      />
      <section className="section container">
        <div className="contact-intro">
          <p className="eyebrow">EL PRIMER PASO ES CONVERSAR</p>
          <h2>¿Cómo podemos ayudarle?</h2>
          <p>
            Elija el canal de contacto que prefiera para comunicarse
            directamente con nosotros.
          </p>
        </div>
        <div className="contact-grid">
          {contacts.map(({ icon: Icon, ...c }) => (
            <Link key={c.title} href={c.href} className="contact-card">
              <Icon size={28} strokeWidth={1.4} />
              <h3>{c.title}</h3>
              <p className="contact-value">{c.detail}</p>
              <p>{c.note}</p>
              <ArrowUpRight size={22} className="contact-arrow" />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
