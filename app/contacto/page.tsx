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
      note: "Comuníquese con nosotros para solicitar información o coordinar una consulta.",
    },
    {
      icon: Phone,
      title: "Llamar a la oficina",
      detail: site.phone,
      href: "tel:+5119005261",
      note: "Contáctenos telefónicamente para realizar consultas y coordinar su atención.",
    },
    {
      icon: Mail,
      title: "Enviar correo electrónico",
      detail: site.email,
      href: `mailto:${site.email}`,
      note: "Escríbanos para solicitar información o realizar coordinaciones profesionales.",
    },
    {
      icon: MapPin,
      title: "Ver ubicación",
      detail: site.address,
      href: "/ubicacion",
      note: "Conozca nuestra ubicación y coordine su visita.",
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Contáctenos"
        description="Estamos a su disposición para atender sus consultas y brindarle información sobre nuestros servicios jurídicos, empresariales y contables."
      />
      <section className="section container">
        <div className="contact-intro">
          <p className="eyebrow">ESTAMOS PARA ATENDERLE</p>
          <h2>¿En qué podemos ayudarle?</h2>
          <p>
            Cada consulta merece una atención adecuada. Comuníquese con nuestro equipo a través del canal de su preferencia y permítanos conocer sus necesidades.
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
