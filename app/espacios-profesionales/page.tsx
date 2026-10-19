import { PageHero, OfficeImage, Button, TextLink } from "@/components/ui";
import { spaces, whatsappUrl } from "@/data/site";
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
        description="Ambientes profesionales para reuniones y actividades de trabajo."
      />
      <section className="section container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SERVICIOS COMPLEMENTARIOS</p>
            <h2>
              Un espacio para su
              <br />
              actividad profesional.
            </h2>
          </div>
          <p className="narrow">
            Además de nuestra asesoría jurídica, puede consultar por espacios de
            trabajo en nuestra sede. Nuestro equipo le informará sobre las
            opciones disponibles.
          </p>
        </div>
        <div className="spaces-grid">
          {spaces.map((s) => (
            <article key={s.title}>
              <OfficeImage number={s.office} />
              <div className="space-content">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <TextLink
                  href={whatsappUrl(
                    `Buenos días, quisiera recibir información sobre ${s.title.toLowerCase()} de LEXCONTERRA GROUP.`,
                  )}
                >
                  Consultar este espacio
                </TextLink>
              </div>
            </article>
          ))}
        </div>
        <div className="availability">
          <div>
            <h2>Conozca las opciones disponibles</h2>
            <p>
              Consulte con nuestro equipo las condiciones aplicables antes de
              coordinar el uso de un espacio.
            </p>
          </div>
          <Button
            href={whatsappUrl(
              "Buenos días, quisiera recibir información sobre los espacios profesionales de LEXCONTERRA GROUP.",
            )}
          >
            Consultar disponibilidad
          </Button>
        </div>
      </section>
    </>
  );
}
