import { Button, TextLink } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="section container not-found">
      <p className="eyebrow">ERROR 404</p>
      <h1>No encontramos esta página.</h1>
      <p>
        Puede volver al inicio o contactar con nuestro equipo para encontrar la
        información que necesita.
      </p>
      <div className="actions">
        <Button href="/">Volver al inicio</Button>
        <TextLink href="/contacto">Contactar con el estudio</TextLink>
      </div>
    </section>
  );
}
