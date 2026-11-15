import { PageHero, OfficeImage, Button } from "@/components/ui";
import { facilities } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Nuestras Instalaciones | LEXCONTERRA GROUP",
  "Conozca las instalaciones de LEXCONTERRA GROUP en Santa Beatriz, Lima, para la atención de consultas y reuniones profesionales.",
  "/instalaciones",
);
export default function Instalaciones() {
  return (
    <>
      <PageHero
        eyebrow="Instalaciones"
        title="Nuestras instalaciones"
        description="Espacios que reflejan profesionalismo, confianza y atención personalizada."
      />
      <section className="section container">
        <div className="intro-grid">
          <h2>
            Un entorno adecuado
            <br />para cada encuentro
          </h2>
          <p>
            LEXCONTERRA GROUP se encuentra ubicado en el edificio Cedral, en Santa Beatriz, Lima, un entorno corporativo que cuenta con recepción y control de ingreso.
            <br /><br />
            Nuestra sede dispone de oficinas privadas y sala de reuniones, con ambientes acondicionados para brindar una atención profesional, cómoda y reservada a nuestros clientes.
          </p>
        </div>
        <div className="gallery">
          {facilities.map((f) => (
            <OfficeImage key={f.title} src={f.src} alt={f.alt} />
          ))}
        </div>
        <div className="section-heading">
          <p>Encuentre nuestra dirección y planifique su visita.</p>
          <Button href="/ubicacion">Ver nuestra ubicación</Button>
        </div>
      </section>
    </>
  );
}
