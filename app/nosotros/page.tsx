import { PageHero, Button, CallToAction } from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Nosotros | LEXCONTERRA GROUP",
  "Conozca nuestra misión, visión, valores y metodología de asesoría jurídica y empresarial en Lima.",
  "/nosotros",
);
export default function Nosotros() {
  return (
    <>
      <PageHero
        eyebrow="Nosotros"
        title="Sobre LEXCONTERRA GROUP"
        description="Criterio profesional, atención cercana y una visión integral del Derecho."
      />
      <section className="section container intro-grid">
        <div>
          <p className="eyebrow">QUIÉNES SOMOS</p>
          <h2>
            Una práctica profesional
            <br />
             basada en el conocimiento 
             <br />
             y a la confianza.
          </h2>
        </div>
        <div>
          <p className="large-copy">
            LEXCONTERRA GROUP reúne a profesionales de distintas especialidades 
            jurídicas y contables, cuya experiencia y conocimientos complementarios
            permiten abordar los asuntos de nuestros clientes desde una perspectiva multidisciplinaria.
          </p>
          <p>
            Nuestra labor se caracteriza por el estudio cuidadoso de cada caso, 
            la evaluación de alternativas y la formulación de estrategias debidamente 
            fundamentadas. Buscamos ofrecer un acompañamiento profesional responsable, 
            con comunicación clara y soluciones acordes con las particularidades de cada situación.
          </p>
        </div>
      </section>
      <section className="ivory section">
        <div className="container two-columns">
          <article>
            <p className="eyebrow">01 / NUESTRO PROPÓSITO</p>
            <h2>Nuestra misión</h2>
            <p>
              Brindar asesoría y defensa jurídica, así como servicios de asesoramiento 
              empresarial y contable, con ética, rigor técnico y enfoque estratégico. 
              Acompañamos a personas y empresas en la toma de decisiones, la prevención 
              de contingencias y la solución de conflictos, ofreciendo alternativas fundamentadas 
              que contribuyan a proteger sus derechos e intereses.
            </p>
          </article>
          <article>
            <p className="eyebrow">02 / NUESTRA DIRECCIÓN</p>
            <h2>Nuestra visión</h2>
            <p>
              Consolidarnos como un estudio de referencia en el Perú, reconocido por 
              la excelencia profesional, la confianza de nuestros clientes y la 
              capacidad de integrar distintas especialidades jurídicas, empresariales 
              y contables, ofreciendo soluciones innovadoras y eficientes frente a 
              los desafíos de un entorno en constante evolución.
            </p>
          </article>
        </div>
      </section>
      <section className="section container">
        <p className="eyebrow">LO QUE NOS GUÍA</p>
        <h2>Nuestros valores</h2>
        <div className="values">
          {[
            [
              "Ética profesional",
              "Actuamos con integridad, responsabilidad e independencia, respetando los principios que rigen el ejercicio profesional.",
            ],
            [
              "Confidencialidad",
              "Protegemos la información de nuestros clientes, garantizando discreción y reserva en cada asunto encomendado.",
            ],
            [
              "Compromiso",
              "Asumimos cada caso con dedicación, diligencia y atención personalizada, priorizando los intereses de nuestros clientes.",
            ],
            [
              "Excelencia",
              "Promovemos la actualización permanente y el rigor técnico para brindar soluciones jurídicas sólidas y eficientes.",
            ],
            [
              "Transparencia",
              "Mantenemos una comunicación clara y oportuna, generando relaciones profesionales basadas en la confianza.",
            ],
          ].map(([v, d], i) => (
            <article key={v}>
              <span>0{i + 1}</span>
              <h3>{v}</h3>
              <br/>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section ivory">
        <div className="container">
          <p className="eyebrow">Un proceso claro, una estrategia para cada caso</p>
          <h2>Nuestra forma de trabajar</h2>
          <div className="steps">
            {[
              [
                "01 / EVALUACIÓN",
                "Análisis y diagnóstico inicial",
                "Escuchamos sus necesidades, examinamos la documentación y evaluamos las circunstancias del caso para identificar alternativas de actuación.",
              ],
              [
                "02 / PLANIFICACIÓN",
                "Diseño de la estrategia profesional",
                "Definimos las acciones jurídicas o empresariales más adecuadas, considerando los objetivos, particularidades y posibles contingencias de cada asunto.",
              ],
              [
                "03 / ACOMPAÑAMIENTO",
                "Gestión y seguimiento del caso",
                "Desarrollamos las acciones encomendadas y mantenemos una comunicación oportuna sobre los avances, incidencias y decisiones relevantes.",
              ],
            ].map(([e, t, d]) => (
              <article key={t}>
                <p className="eyebrow">{e}</p>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
          <Button href="/equipo">Conocer nuestro equipo</Button>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
