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
            Brindamos asesoría legal y empresarial a personas y empresas, con un
            enfoque preventivo y estratégico, orientado a proteger sus
            intereses, anticipar contingencias y resolver controversias.
          </p>
          <div className="actions">
            <Button href={whatsappUrl()}>Solicitar consulta</Button>
            <TextLink href="/areas-de-practica">
              Conocer nuestros servicios
            </TextLink>
          </div>
          <div className="hero-note">
            <span className="gold-line" />A tu lado, en cada decisión.
          </div>
        </div>
        <div className="hero-visual">
          <OfficeImage
            src="/images/Foto_5_Oficina_Principal.png"
            alt="Oficina principal de LEXCONTERRA GROUP en Lima"
            priority
          />
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
            Distintas especialidades. Una misma visión.
          </p>
          <p>
            Somos un equipo de profesionales del ámbito juridico y contable que integra conocimientos
            y experiencia para brindar una asesoría multidisciplinaria. Nuetra fortaleza radica en la
            complementariedad de nuestras especialidades, lo que nos permite abordar cada asunto con una
            perspectiva integral y ofrecer soluciones adaptadas a las necesidades de personas y empresas.
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
            La experiencia detras
            <br />
            de cada asesoría.
          </h2>
          <p>
            Nuestro equipo reúne profesionales con sólidas trayectorias y especialidades complementarias, quienes aportan sus conocimientos y experiencia para brindar una atención jurídica y contable rigurosa, responsable y cercana a las necesidades de cada cliente.
          </p>
          <TextLink href="/equipo">Conocer nuestro equipo</TextLink>
        </div>
        <div className="team-statement">
          <span>LEXCONTERRA GROUP</span>
          <blockquote>
            El rigor en el análisis.
            <br />
            La confianza en el trato.
          </blockquote>
          <ArrowUpRight size={35} strokeWidth={1} />
        </div>
      </section>
      <section className="office-teaser container">
        <OfficeImage
          src="/images/recepcion-moderna-cedral.png"
          alt="Recepción moderna con rótulo CEDRAL en LEXCONTERRA GROUP"
        />
        <div>
          <p className="eyebrow">NUESTRAS INSTALACIONES</p>
          <h2>
            Un entorno profesional
            <br />
            desde su llegada.
          </h2>
          <p>
            Ubicados en el edificio Cedral, en Santa Beatriz, Lima, ofrecemos un entorno corporativo con recepción y ambientes privados especialmente acondicionados para la atención de nuestros clientes y el desarrollo de reuniones profesionales.
          </p>
          <TextLink href="/instalaciones">Ver nuestras instalaciones</TextLink>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
