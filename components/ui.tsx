import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Scale,
  Landmark,
  Building2,
  BriefcaseBusiness,
  FileCheck2,
  Calculator,
  ShieldCheck,
  BookOpen,
  MessageCircle,
} from "lucide-react";
import { officeImage, hasLogo } from "@/lib/images";
import { practices, type Professional, whatsappUrl } from "@/data/site";
export function Brand() {
  return hasLogo() ? (
    <Image
      src="/images/logo-lexconterra.jpeg"
      alt="LEXCONTERRA GROUP"
      width={220}
      height={78}
      className="original-logo"
    />
  ) : (
    <span className="brand-text">
      LEXCONTERRA<span>G R O U P</span>
      <small>Logotipo original pendiente</small>
    </span>
  );
}
export function Button({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link href={href} className={`button ${secondary ? "button-outline" : ""}`}>
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link className="text-link" href={href}>
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumbs">
          <Link href="/">Inicio</Link>
          <span>/</span>
          <span>{eyebrow}</span>
        </div>
        <p className="eyebrow">LEXCONTERRA GROUP · {eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="lead">{description}</p>}
      </div>
    </section>
  );
}
export function OfficeImage({
  number,
  priority = false,
  className = "",
}: {
  number: number;
  priority?: boolean;
  className?: string;
}) {
  const image = officeImage(number);
  return (
    <figure className={`office-image ${className}`}>
      <Image
        src={image.src}
        alt={
          image.pending
            ? `Fotografía ${number} de la oficina pendiente de incorporar`
            : `Instalaciones de LEXCONTERRA GROUP en Lima, fotografía ${number}`
        }
        fill
        sizes="(max-width: 760px) 100vw, 60vw"
        priority={priority}
      />
      {image.pending && (
        <figcaption>
          <span>LEXCONTERRA GROUP</span>Fotografía de oficina{" "}
          {String(number).padStart(2, "0")}
          <small>Imagen original pendiente de incorporar</small>
        </figcaption>
      )}
    </figure>
  );
}
const icons = [
  Scale,
  Landmark,
  Building2,
  BriefcaseBusiness,
  FileCheck2,
  Calculator,
  ShieldCheck,
  BookOpen,
];
export function PracticeCard({
  practice,
  detailed = false,
}: {
  practice: (typeof practices)[number];
  detailed?: boolean;
}) {
  const Icon = icons[practices.indexOf(practice)] || Scale;
  const Heading = detailed ? "h2" : "h3";
  return (
    <article className={`practice-card ${detailed ? "detailed" : ""}`}>
      <Icon size={29} strokeWidth={1.3} />
      <Heading>{practice.title}</Heading>
      <p>{practice.description}</p>
      {detailed && (
        <ul>
          {practice.services.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}
      <TextLink
        href={
          detailed
            ? whatsappUrl(
                `Buenos días, quisiera solicitar información sobre ${practice.title} en LEXCONTERRA GROUP.`,
              )
            : "/areas-de-practica"
        }
      >
        {detailed ? "Solicitar información" : "Conocer el área"}
      </TextLink>
    </article>
  );
}
export function TeamCard({ person }: { person: Professional }) {
  return (
    <article className="team-card">
      <div className="portrait">
        {person.photo ? (
          <Image
            src={person.photo}
            alt={person.name}
            fill
            sizes="(max-width: 760px) 100vw, 33vw"
          />
        ) : (
          <span aria-label={`Iniciales de ${person.name}`}>
            {person.initials}
          </span>
        )}
        <small>LEXCONTERRA GROUP</small>
      </div>
      <div className="team-info">
        <p className="eyebrow">{person.role}</p>
        <h2>{person.name}</h2>
        <ul>
          {person.areas.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
        {person.bio && <p>{person.bio}</p>}
        {person.registration && <p>Colegiatura: {person.registration}</p>}
      </div>
    </article>
  );
}
export function CallToAction() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">CONVERSEMOS</p>
          <h2>
            Estamos preparados para
            <br />
            escuchar su consulta
          </h2>
        </div>
        <Button href="/contacto">Contactar con LEXCONTERRA</Button>
      </div>
    </section>
  );
}
export function WhatsAppButton() {
  return (
    <a
      className="floating-whatsapp"
      href={whatsappUrl()}
      aria-label="Consultar por WhatsApp"
    >
      <MessageCircle size={24} />
      <span>Conversemos</span>
    </a>
  );
}
