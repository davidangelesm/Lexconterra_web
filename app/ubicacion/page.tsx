import { MapPin, Phone, Mail } from "lucide-react";
import { PageHero, OfficeImage, Button, TextLink } from "@/components/ui";
import { site, mapsUrl, whatsappUrl } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Ubicación en Lima | LEXCONTERRA GROUP",
  "Visítenos en Avenida Arenales 1245, Oficina 207, Santa Beatriz, Cercado de Lima. Consulte el mapa y las indicaciones para llegar.",
  "/ubicacion",
);
export default function Ubicacion() {
  return (
    <>
      <PageHero
        eyebrow="Ubicación"
        title="Dónde encontrarnos"
        description="Nuestra sede en Santa Beatriz, Lima."
      />
      <section className="section container">
        <div className="location-grid">
          <div>
            <p className="eyebrow">VISITE NUESTRA SEDE</p>
            <h2>
              Estamos cerca de
              <br />
              su próxima decisión.
            </h2>
            <p className="contact-line">
              <MapPin />
              {site.address}
            </p>
            <Button href={mapsUrl}>Cómo llegar</Button>
            <div className="contact-details">
              <a href="tel:+5119005261">
                <Phone size={18} />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`}>
                <Mail size={18} />
                {site.email}
              </a>
              <TextLink href={whatsappUrl()}>
                Coordinar una visita por WhatsApp
              </TextLink>
            </div>
          </div>
          <iframe
            className="map"
            title="Mapa de la sede de LEXCONTERRA GROUP en Avenida Arenales 1245, Lima"
            src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="location-photo">
          <OfficeImage number={4} />
          <TextLink href={mapsUrl}>Abrir ubicación en Google Maps</TextLink>
        </div>
      </section>
    </>
  );
}
