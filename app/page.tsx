import { ArrowUpRight } from "lucide-react";
import {
  Button,
  TextLink,
  OfficeImage,
  PracticeCard,
  CallToAction,
} from "@/components/ui";
import { practices, whatsappUrl } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "LEXCONTERRA GROUP | Asesoría Legal y Empresarial en Lima",
  "Asesoría legal especializada para personas y empresas en Lima. Conozca nuestras áreas jurídicas, equipo profesional y servicios empresariales.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">CRITERIO JURÍDICO. VISIÓN EMPRESARIAL.</p>
          <h1>
            Soluciones jurídicas con <em>enfoque estratégico</em>
          </h1>
          <p>
            Asesoría legal especializada para personas y empresas, orientada a
            la prevención de contingencias, solución de conflictos y protección
            de sus intereses.
          </p>
          <div className="actions">
            <Button href={whatsappUrl()}>Solicitar consulta</Button>
            <TextLink href="/areas-de-practica">
              Conocer nuestros servicios
            </TextLink>
          </div>
          <div className="hero-note">
            <span className="gold-line" />A su lado, en cada decisión.
          </div>
        </div>
        <div className="hero-visual">
          <OfficeImage number={5} priority />
          <div className="hero-caption">
            <span>NUESTRA SEDE</span>
            <p>Un espacio para construir confianza.</p>
            <TextLink href="/instalaciones">Lima, Perú</TextLink>
          </div>
        </div>
      </section>
      <div className="principles">
        <div className="container">
          <span>Atención personalizada</span>
          <span>Ética profesional</span>
          <span>Enfoque preventivo</span>
          <span>Asesoría integral</span>
        </div>
      </div>
      <section className="section container intro-grid">
        <div>
          <p className="eyebrow">EL ESTUDIO</p>
          <h2>
            Bienvenidos a<br />
            LEXCONTERRA GROUP
          </h2>
        </div>
        <div>
          <p className="large-copy">
            Cada decisión merece una perspectiva jurídica clara.
          </p>
          <p>
            Reunimos especialización jurídica y visión empresarial para
            acompañar a personas y organizaciones. Trabajamos con rigor, ética y
            atención personalizada para comprender sus necesidades y orientar
            cada paso.
          </p>
          <TextLink href="/nosotros">Conocer nuestro estudio</TextLink>
        </div>
      </section>
      <section className="section ivory">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">NUESTRAS ESPECIALIDADES</p>
              <h2>
                Una mirada integral.
                <br />
                Soluciones especializadas.
              </h2>
            </div>
            <TextLink href="/areas-de-practica">
              Ver todas las especialidades
            </TextLink>
          </div>
          <div className="practice-grid">
            {[0, 1, 2, 3, 6, 5].map((i) => (
              <PracticeCard key={practices[i].slug} practice={practices[i]} />
            ))}
          </div>
        </div>
      </section>
      <section className="section container team-teaser">
        <div>
          <p className="eyebrow">NUESTRO EQUIPO</p>
          <h2>
            Distintas especialidades.
            <br />
            Un mismo compromiso.
          </h2>
          <p>
            Un equipo multidisciplinario que integra el análisis jurídico y la
            asesoría empresarial, con atención cercana a las necesidades de cada
            cliente.
          </p>
          <TextLink href="/equipo">Conocer nuestro equipo</TextLink>
        </div>
        <div className="team-statement">
          <span>LEXCONTERRA</span>
          <blockquote>
            El rigor en el análisis.
            <br />
            La confianza en el trato.
          </blockquote>
          <ArrowUpRight size={35} strokeWidth={1} />
        </div>
      </section>
      <section className="office-teaser container">
        <OfficeImage number={1} />
        <div>
          <p className="eyebrow">NUESTRAS INSTALACIONES</p>
          <h2>
            Conversemos en un
            <br />
            entorno profesional.
          </h2>
          <p>
            Conozca nuestra sede en Santa Beatriz, Lima, y los ambientes
            destinados a la atención de consultas y reuniones profesionales.
          </p>
          <TextLink href="/instalaciones">Ver nuestras instalaciones</TextLink>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
