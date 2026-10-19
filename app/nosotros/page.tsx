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
            Una relación profesional
            <br />
            basada en la confianza.
          </h2>
        </div>
        <div>
          <p className="large-copy">
            LEXCONTERRA GROUP reúne profesionales especializados en distintas
            áreas del Derecho y la asesoría empresarial, con el propósito de
            ofrecer soluciones jurídicas integrales, estratégicas y adaptadas a
            las necesidades de cada cliente.
          </p>
          <p>
            Nuestra labor se fundamenta en el análisis riguroso, la atención
            personalizada y la prevención de contingencias, buscando establecer
            relaciones profesionales de confianza y compromiso.
          </p>
        </div>
      </section>
      <section className="ivory section">
        <div className="container two-columns">
          <article>
            <p className="eyebrow">01 / NUESTRO PROPÓSITO</p>
            <h2>Nuestra misión</h2>
            <p>
              Brindar asesoría y defensa jurídica integral, especializada y
              estratégica a personas naturales y jurídicas, mediante soluciones
              eficientes, preventivas y orientadas a resultados, sustentadas en
              la ética profesional, el rigor técnico y el compromiso con la
              protección de los derechos e intereses de nuestros clientes.
            </p>
          </article>
          <article>
            <p className="eyebrow">02 / NUESTRA DIRECCIÓN</p>
            <h2>Nuestra visión</h2>
            <p>
              Consolidarnos como un estudio jurídico de referencia en el Perú,
              reconocido por la excelencia profesional, la confianza de nuestros
              clientes, la innovación en la prestación de servicios legales y la
              capacidad de ofrecer soluciones integrales a los desafíos
              jurídicos y empresariales.
            </p>
          </article>
        </div>
      </section>
      <section className="section container">
        <p className="eyebrow">LO QUE NOS GUÍA</p>
        <h2>Nuestros valores</h2>
        <div className="values">
          {[
            "Ética profesional",
            "Confidencialidad",
            "Compromiso",
            "Excelencia",
            "Transparencia",
          ].map((v, i) => (
            <article key={v}>
              <span>0{i + 1}</span>
              <h3>{v}</h3>
            </article>
          ))}
        </div>
      </section>
      <section className="section ivory">
        <div className="container">
          <p className="eyebrow">UN PROCESO CLARO</p>
          <h2>Nuestra metodología de trabajo</h2>
          <div className="steps">
            {[
              [
                "Análisis y evaluación inicial",
                "Escuchamos su consulta y examinamos la información relevante para comprender el contexto.",
              ],
              [
                "Diseño de estrategia jurídica",
                "Definimos un enfoque acorde con las particularidades y necesidades de cada asunto.",
              ],
              [
                "Seguimiento y acompañamiento profesional",
                "Mantenemos una comunicación clara durante el desarrollo de la asesoría.",
              ],
            ].map(([t, d], i) => (
              <article key={t}>
                <span>0{i + 1}</span>
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
