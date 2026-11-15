import { PageHero, TeamCard, CallToAction } from "@/components/ui";
import { team } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Nuestro Equipo Profesional | LEXCONTERRA GROUP",
  "Conozca a los seis profesionales de LEXCONTERRA GROUP y sus áreas de práctica jurídica, contable y de gestión.",
  "/equipo",
);
export default function Equipo() {
  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="Nuestro equipo profesional"
        description="Conozca a los profesionales y colaboradores que aportan experiencia, especialización y compromiso a la labor jurídica, empresarial y contable de LEXCONTERRA GROUP."
      />
      <section className="section container">
        <div className="team-grid">
          {team.map((person) => (
            <TeamCard key={person.name} person={person} />
          ))}
        </div>
      </section>
      <CallToAction />
    </>
  );
}
