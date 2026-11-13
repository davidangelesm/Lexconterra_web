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
      "Protegemos los derechos e intereses de las personas, ofreciendo orientación y respaldo jurídico frente a situaciones que afectan sus relaciones personales y patrimoniales.",
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
      "Contribuimos a brindar seguridad jurídica a la propiedad y al patrimonio, facilitando su formalización y la solución de dificultades registrales.",
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
      "Acompañamos el desarrollo de los negocios, aportando respaldo jurídico para tomar decisiones, fortalecer sus operaciones y afrontar los desafíos empresariales.",
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
      "Promovemos relaciones laborales jurídicamente seguras, brindando orientación y defensa a empleadores y trabajadores frente a situaciones de conflicto.",
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
      "Integramos conocimientos jurídicos y contables para favorecer una gestión económica responsable, prevenir contingencias y fortalecer la estabilidad empresarial.",
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
      "Brindamos asesoramiento y defensa jurídica ante situaciones de naturaleza penal, velando por el respeto de los derechos y garantías de nuestros patrocinados.",
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
    name: "Mg. David Angeles Pérez",
    role: "Abogado Principal",
    initials: "DA",
    areas: ["Derecho Civil", "Derecho Registral", "Derecho Empresarial"],
    photo: "/images/equipo/FOTO DAVID ANGELES.png",
    bio: "Abogado y Contador Público por la Universidad Inca Garcilaso de la Vega, con una amplia trayectoria profesional que integra la experiencia jurídica, contable y empresarial. Magíster en Derecho Civil y Comercial por la Universidad Privada San Juan Bautista, con especializaciones en Derecho Registral y Notarial por la Universidad de San Martín de Porres y en Derecho Minero por la Cámara Minera del Perú. Actualmente cursa el Doctorado en Derecho en la Universidad San Ignacio de Loyola (USIL). Su formación multidisciplinaria le permite abordar con una visión integral los asuntos civiles, registrales y empresariales, especialmente en materia contractual, patrimonial, inmobiliaria y societaria. Como abogado principal de LEXCONTERRA GROUP, lidera el desarrollo de estrategias jurídicas orientadas a la prevención de contingencias, la solución de controversias y la protección de los intereses de sus clientes.",
    registration: null,
  },
  {
    name: "Mg. José Rojas Minaya",
    role: "Abogado Asociado",
    initials: "JR",
    areas: ["Derecho Laboral", "Derecho Administrativo"],
    photo: "/images/equipo/FOTO JOSE ROJAS.png",
    bio: "Abogado por la Universidad Nacional Mayor de San Marcos y licenciado en Administración de Empresas por la Universidad de San Martín de Porres, con una amplia trayectoria profesional. Cuenta con formación de posgrado en Derecho Laboral y especializaciones en Derecho Administrativo, Gestión Pública, Contrataciones del Estado y procedimientos administrativos. Su práctica profesional se orienta especialmente a la prevención y solución de conflictos laborales, las relaciones entre empleadores y trabajadores y la defensa de los administrados frente a las entidades públicas. Su labor se distingue por el rigor jurídico, la experiencia y un enfoque estratégico orientado a la protección de los intereses de sus patrocinados.",
    registration: null,
  },
  {
    name: "Mg. Luis Miguel Guillén Rivera",
    role: "Contador Público Asociado",
    initials: "LG",
    areas: ["Auditoría Forense", "Peritaje Contable", "Asesoría Tributaria"],
    photo: "/images/equipo/FOTO LUIS GUILLEN.png",
    bio: "Contador Público Colegiado y maestro en Administración, con una amplia trayectoria profesional en auditoría, peritaje contable y gestión financiera. Egresado del Doctorado en Economía, con especializaciones en Auditoría Forense, Auditoría Tributaria, Contrataciones del Estado y Gestión de Riesgos. Ha ejercido funciones como perito contable judicial y forense en el Poder Judicial y el Ministerio Público, interviniendo en investigaciones sobre delitos económicos, corrupción y lavado de activos. Asimismo, preside el Comité Técnico Funcional de Peritaje Contable del Colegio de Contadores Públicos de Lima. Su labor se caracteriza por el rigor técnico, la objetividad y un enfoque estratégico orientado a la prevención de contingencias empresariales.",
    registration: null,
  },
  {
    name: "Mg. Christian Salomón García Angulo",
    role: "Abogado Asociado Externo",
    initials: "CG",
    areas: ["Derecho Penal"],
    photo: "/images/equipo/FOTO CHRISTIAN.png",
    bio: "Abogado especializado en Derecho Penal, con una amplia trayectoria profesional en el Ministerio Público, donde adquirió sólida experiencia en la investigación y persecución del delito. Magíster por la Universidad de Jaén, España, y egresado de la Maestría en Derecho Penal por la Universidad Nacional Mayor de San Marcos. Su experiencia en la función fiscal le permite desarrollar una defensa penal estratégica, sustentada en el conocimiento de los procedimientos de investigación, la valoración de los elementos probatorios y las garantías del debido proceso. Su práctica profesional se distingue por el análisis riguroso de cada caso, la construcción de estrategias de defensa y el compromiso con la protección de los derechos e intereses de sus patrocinados.",
    registration: null,
  },
  {
    name: "Mg. Francisco Antonio Condeña Carrasco",
    role: "Abogado Asociado Externo",
    initials: "FC",
    areas: [
      "Derecho Civil",
      "Derecho Administrativo",
      "Derecho Constitucional",
    ],
    photo: "/images/equipo/FOTO FRANCISCO CONDEÑA 01.png",
    bio: "Abogado con una amplia trayectoria profesional en el Poder Judicial, institución en la que adquirió sólida experiencia en el funcionamiento de la administración de justicia y el desarrollo de los procesos judiciales. Maestro en Derecho por la Universidad Privada San Juan Bautista y con estudios de Doctorado en curso. Su práctica profesional se orienta al Derecho Civil, Administrativo y Constitucional, con especial atención a la solución de controversias, la defensa de derechos y la protección de las garantías procesales. Su experiencia institucional le permite abordar cada caso con una visión integral del sistema de justicia, desarrollando estrategias jurídicas sustentadas en el análisis riguroso, el conocimiento normativo y el compromiso con los intereses de sus patrocinados.",
    registration: null,
  },
  {
    name: "Sr. Carlos Rodríguez Valera",
    role: "Responsable de Soporte y Gestión de Trámites",
    initials: "CR",
    areas: [
      "Área Administrativa",
      "Área Judicial",
      "Área Notarial y Registral",
    ],
    photo: "/images/equipo/FOTO CARLOS ROGRIGUEZ.png",
    bio: "Profesional con una amplia trayectoria y experiencia en la gestión de trámites y procedimientos ante entidades públicas y privadas. Especializado en el seguimiento de gestiones administrativas, judiciales, notariales y registrales, así como en la coordinación de diligencias y actuaciones vinculadas a los servicios del estudio. Su labor comprende el control y seguimiento de expedientes, la gestión documental y la coordinación operativa para el cumplimiento oportuno de los procedimientos encomendados. Como responsable del área de Soporte y Gestión de Trámites de LEXCONTERRA GROUP, contribuye a la eficiencia operativa del estudio, garantizando una atención organizada, diligente y comprometida con las necesidades de nuestros clientes.",
    registration: null,
  },
];
export const spaces = [
  {
    title: "Oficinas privadas",
    description:
      "Un espacio para desarrollar sus actividades profesionales. Consulte las opciones y condiciones disponibles.",
    office: 1,
    image: "/images/Foto_oficinas_privadas.png",
    rates: null,
    availability: null,
    terms: null,
  },
  {
    title: "Salas de reuniones",
    description:
      "Ambientes para encuentros profesionales y reuniones de trabajo. Consulte la disponibilidad para su actividad.",
    office: 2,
    image: "/images/Foto_sala_de_reuniones.png",
    rates: null,
    availability: null,
    terms: null,
  },
  {
    title: "Módulos de trabajo",
    description:
      "Espacios para sus actividades de trabajo. Contáctenos para conocer las alternativas y condiciones de uso.",
    office: 3,
    image: "/images/Foto_Modulos_trabajo.png",
    rates: null,
    availability: null,
    terms: null,
  },
];
export const facilities = [
  {
    title: "Oficina principal",
    src: "/images/Foto_5_Oficina_Principal.png",
    alt: "Oficina principal de LEXCONTERRA GROUP en Lima",
  },
  {
    title: "Oficinas privadas",
    src: "/images/Foto_oficinas_privadas.png",
    alt: "Oficinas privadas de LEXCONTERRA GROUP en Lima",
  },
  {
    title: "Salas de reuniones",
    src: "/images/Foto_sala_de_reuniones.png",
    alt: "Salas de reuniones de LEXCONTERRA GROUP en Lima",
  },
  {
    title: "Módulos de trabajo",
    src: "/images/Foto_Modulos_trabajo.png",
    alt: "Módulos de trabajo de LEXCONTERRA GROUP en Lima",
  },
];
