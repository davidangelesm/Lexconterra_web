import { PageHero, PracticeCard, CallToAction } from "@/components/ui";
import { practices } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Áreas de Práctica Jurídica | LEXCONTERRA GROUP",
  "Explore nuestras ocho áreas de asesoría jurídica: civil, registral, empresarial, laboral, administrativa, tributaria, penal y constitucional.",
  "/areas-de-practica",
);
export default function Areas() {
  return (
    <>
      <PageHero
        eyebrow="Servicios Jurídicos"
        title="Nuestras áreas de práctica"
        description="Cada asunto requiere una respuesta jurídica especializada."
      />
      <section className="section container areas-section">
        <div className="section-heading">
          <p className="large-copy narrow">
            Brindamos asesoramiento y defensa jurídica a personas y empresas, abordando cada situación de acuerdo con sus particularidades y necesidades.
          </p>
          <p className="lead narrow">
            <strong>
              Explore nuestras especialidades y contacte directamente con nuestro equipo profesional.
            </strong>
          </p>
        </div>
        <div className="practice-grid detailed-grid">
          {practices.map((p) => (
            <PracticeCard key={p.slug} practice={p} detailed />
          ))}
        </div>
      </section>
      <CallToAction />
    </>
  );
}
