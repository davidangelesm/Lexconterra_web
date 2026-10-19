import { PageHero, TeamCard, CallToAction } from "@/components/ui";
import { team } from "@/data/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Nuestro Equipo Profesional | LEXCONTERRA GROUP",
  "Conozca a los cinco profesionales de LEXCONTERRA GROUP y sus áreas de práctica jurídica y contable.",
  "/equipo",
);
export default function Equipo() {
  return (
    <>
      <PageHero
        eyebrow="Equipo"
        title="Nuestro equipo profesional"
        description="Experiencia especializada y compromiso con la atención jurídica."
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
