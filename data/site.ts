export const site = {
  name: "LEXCONTERRA GROUP",
  domain: "https://www.lexconterragroup.com",
  address:
    "Avenida Arenales 1245, Oficina 207, Urbanización Santa Beatriz, Cercado de Lima, Perú.",
  email: "lexconterragroup@gmail.com",
  phone: "(01) 900 5261",
  whatsapp: "+51 990 290 588",
};
export const whatsappUrl = (
  message = "Buenos días, quisiera solicitar información sobre los servicios jurídicos de LEXCONTERRA GROUP.",
) => `https://wa.me/51990290588?text=${encodeURIComponent(message)}`;
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;
export const navigation = [
  ["Inicio", "/"],
  ["Nosotros", "/nosotros"],
  ["Áreas de práctica", "/areas-de-practica"],
  ["Espacios profesionales", "/espacios-profesionales"],
  ["Equipo", "/equipo"],
  ["Instalaciones", "/instalaciones"],
  ["Ubicación", "/ubicacion"],
  ["Contacto", "/contacto"],
] as const;
export const practices = [
  {
    slug: "civil",
    title: "Derecho Civil",
    description:
      "Asesoramiento en contratos, obligaciones, derechos reales, responsabilidad civil y procesos civiles.",
    services: [
      "Contratos y obligaciones",
      "Derechos reales",
      "Responsabilidad y procesos civiles",
    ],
  },
  {
    slug: "registral",
    title: "Derecho Registral",
    description:
      "Asesoría registral, saneamiento de propiedades, inscripción de títulos y procedimientos ante SUNARP.",
    services: [
      "Saneamiento de propiedades",
      "Inscripción de títulos",
      "Procedimientos ante SUNARP",
    ],
  },
  {
    slug: "empresarial",
    title: "Derecho Empresarial y Societario",
    description:
      "Asesoría empresarial, organización societaria, contratos comerciales y prevención de contingencias legales.",
    services: [
      "Organización societaria",
      "Contratos comerciales",
      "Prevención de contingencias",
    ],
  },
  {
    slug: "laboral",
    title: "Derecho Laboral",
    description:
      "Relaciones laborales, asesoramiento preventivo, cumplimiento normativo y solución de controversias laborales.",
    services: [
      "Asesoramiento preventivo",
      "Cumplimiento laboral",
      "Controversias laborales",
    ],
  },
  {
    slug: "administrativo",
    title: "Derecho Administrativo",
    description:
      "Procedimientos administrativos, recursos y representación ante entidades de la administración pública.",
    services: [
      "Procedimientos administrativos",
      "Recursos administrativos",
      "Representación ante entidades públicas",
    ],
  },
  {
    slug: "tributario",
    title: "Derecho Tributario y Contable",
    description:
      "Asesoría tributaria, cumplimiento de obligaciones fiscales y orientación contable empresarial.",
    services: [
      "Asesoría tributaria",
      "Obligaciones fiscales",
      "Orientación contable empresarial",
    ],
  },
  {
    slug: "penal",
    title: "Derecho Penal",
    description:
      "Asesoramiento y defensa legal en investigaciones y procesos penales.",
    services: [
      "Asesoramiento penal",
      "Defensa en investigaciones",
      "Defensa en procesos penales",
    ],
  },
  {
    slug: "constitucional",
    title: "Derecho Constitucional",
    description:
      "Protección de derechos fundamentales y procesos constitucionales.",
    services: [
      "Orientación sobre derechos fundamentales",
      "Procesos constitucionales",
    ],
  },
];
export type Professional = {
  name: string;
  role: string;
  initials: string;
  areas: string[];
  photo: string | null;
  bio: string | null;
  registration: string | null;
};
export const team: Professional[] = [
  {
    name: "Mg. David Angeles Perez",
    role: "Abogado principal",
    initials: "DA",
    areas: ["Derecho Civil", "Derecho Registral", "Derecho Empresarial"],
    photo: null,
    bio: null,
    registration: null,
  },
  {
    name: "Mg. José Rojas Minaya",
    role: "Abogado asociado",
    initials: "JR",
    areas: ["Derecho Laboral", "Derecho Administrativo"],
    photo: null,
    bio: null,
    registration: null,
  },
  {
    name: "Mg. Diana Molina Santa Cruz",
    role: "Asociada",
    initials: "DM",
    areas: ["Derecho Tributario", "Derecho Societario", "Área Contable"],
    photo: null,
    bio: null,
    registration: null,
  },
  {
    name: "Mg. Francisco Condeña Carrasco",
    role: "Abogado asociado",
    initials: "FC",
    areas: [
      "Derecho Civil",
      "Derecho Administrativo",
      "Derecho Constitucional",
    ],
    photo: null,
    bio: null,
    registration: null,
  },
  {
    name: "Mag. Christian Garcia Angulo",
    role: "Abogado asociado",
    initials: "CG",
    areas: ["Derecho Penal"],
    photo: null,
    bio: null,
    registration: null,
  },
];
export const spaces = [
  {
    title: "Oficinas privadas",
    description:
      "Un espacio para desarrollar sus actividades profesionales. Consulte las opciones y condiciones disponibles.",
    office: 1,
    rates: null,
    availability: null,
    terms: null,
  },
  {
    title: "Salas de reuniones",
    description:
      "Ambientes para encuentros profesionales y reuniones de trabajo. Consulte la disponibilidad para su actividad.",
    office: 2,
    rates: null,
    availability: null,
    terms: null,
  },
  {
    title: "Módulos de trabajo",
    description:
      "Espacios para sus actividades de trabajo. Contáctenos para conocer las alternativas y condiciones de uso.",
    office: 3,
    rates: null,
    availability: null,
    terms: null,
  },
];
