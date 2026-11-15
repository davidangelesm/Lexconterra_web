import { PageHero, OfficeImage, Button, TextLink } from "@/components/ui";
import { spaces, spacesIntro, whatsappUrl } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Espacios Profesionales | LEXCONTERRA GROUP",
  "Consulte sobre oficinas privadas, salas de reuniones y módulos de trabajo en LEXCONTERRA GROUP, Lima.",
  "/espacios-profesionales",
);
export default function Espacios() {
  return (
    <>
      <PageHero
        eyebrow="Espacios profesionales"
        title="Espacios profesionales"
        description="Oficinas privadas, salas de reuniones y módulos de trabajo en Santa Beatriz, Lima."
      />
      <section className="section container">
        <div className="intro-grid spaces-intro">
          <div>
            <p className="eyebrow">{spacesIntro.eyebrow}</p>
            <h2>
              Un espacio profesional
              <br />
              cuando lo necesita.
            </h2>
          </div>
          <div>
            <p className="large-copy">{spacesIntro.description}</p>
            <p>{spacesIntro.extraDescription}</p>
            <br />
          </div>
        </div>
        <div className="spaces-grid">
          {spaces.map((s) => (
            <article key={s.title}>
              <OfficeImage
                src={s.image}
                alt={`${s.title} de LEXCONTERRA GROUP`}
              />
              <div className="space-content">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <TextLink
                  href={whatsappUrl(
                    `Buenos días, quisiera recibir información sobre ${s.title.toLowerCase()} de LEXCONTERRA GROUP.`,
                  )}
                >
                  {s.cta}
                </TextLink>
              </div>
            </article>
          ))}
        </div>
        <div className="availability">
          <div>
            <h2>Encuentre el espacio adecuado para su actividad</h2>
            <p>
              Consulte nuestras tarifas, horarios y condiciones de uso. Nuestro equipo le ayudará a identificar el ambiente que mejor se adapte a sus necesidades.
            </p>
          </div>
          <Button
            href={whatsappUrl(
              "Buenos días, quisiera recibir información sobre los espacios profesionales de LEXCONTERRA GROUP.",
            )}
          >
            Consultar disponibilidad y tarifas
          </Button>
        </div>
      </section>
    </>
  );
}
