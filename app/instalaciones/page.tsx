import { PageHero, OfficeImage, Button } from "@/components/ui";
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
        description="Un entorno profesional diseñado para la atención de nuestros clientes."
      />
      <section className="section container">
        <div className="intro-grid">
          <h2>
            Un lugar para escuchar
            <br />y trabajar en su consulta.
          </h2>
          <p>
            Nuestra sede en Santa Beatriz acoge la atención de nuestros clientes
            y las reuniones profesionales. Conozca los ambientes de LEXCONTERRA
            GROUP a través de esta galería.
          </p>
        </div>
        <div className="gallery">
          {[1, 2, 3, 4].map((n) => (
            <OfficeImage key={n} number={n} />
          ))}
        </div>
        <div className="section-heading">
          <p>Encuentre la dirección de nuestra sede y planifique su visita.</p>
          <Button href="/ubicacion">Ver nuestra ubicación</Button>
        </div>
      </section>
    </>
  );
}
