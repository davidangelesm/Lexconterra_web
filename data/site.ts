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
export const mapsUrl = "https://maps.app.goo.gl/n7e7WrYEG9399DHT9";
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
      "Brindamos asesoramiento y defensa jurídica en asuntos que afectan los derechos personales, las relaciones contractuales y el patrimonio. Nuestro objetivo es prevenir conflictos, proteger sus intereses y encontrar soluciones legales frente a controversias entre particulares.",
    services: [
      "Elaboración, revisión y resolución de contratos.",
      "Conflictos sobre propiedad, posesión y derechos inmobiliarios.",
      "Arrendamientos, desalojos y recuperación de inmuebles.",
      "Cobranza de deudas e incumplimiento de obligaciones.",
      "Sucesiones, herencias y peticiones de herencia.",
      "Responsabilidad civil, indemnizaciones y procesos judiciales.",
    ],
  },
  {
    slug: "registral",
    title: "Derecho Registral",
    description:
      "Ofrecemos asesoría especializada para regularizar, proteger y formalizar la propiedad inmobiliaria y otros derechos susceptibles de inscripción. Atendemos dificultades registrales y procedimientos ante la SUNARP, buscando brindar seguridad jurídica a su patrimonio y facilitar sus operaciones inmobiliarias.",
    services: [
      "Saneamiento físico-legal de predios urbanos y rurales.",
      "Independización, acumulación y subdivisión de inmuebles.",
      "Rectificación de áreas, linderos y medidas perimétricas.",
      "Inscripción de declaratorias de fábrica y reglamentos internos.",
      "Inscripción y regularización de títulos y derechos registrales.",
      "Subsanación de observaciones, apelaciones y procedimientos ante SUNARP.",
    ],
  },
  {
    slug: "empresarial",
    title: "Derecho Empresarial y Societario",
    description:
      "Acompañamos a emprendedores, empresarios y sociedades en la organización, desarrollo y protección de sus actividades comerciales. Brindamos respaldo jurídico para adoptar decisiones empresariales, fortalecer las relaciones comerciales y prevenir conflictos que puedan afectar la continuidad de sus negocios.",
    services: [
      "Constitución de empresas y formalización de negocios.",
      "Elaboración y modificación de estatutos y acuerdos societarios.",
      "Elaboración, revisión y negociación de contratos comerciales.",
      "Aumentos de capital, transformación y reorganización de sociedades.",
      "Asesoramiento en juntas de accionistas, directorios y poderes.",
      "Prevención y solución de conflictos entre socios y empresas.",
    ],
  },
  {
    slug: "laboral",
    title: "Derecho Laboral",
    description:
      "Brindamos asesoramiento a empleadores y trabajadores para proteger sus derechos y promover relaciones laborales adecuadas. Intervenimos en la prevención y solución de controversias, procurando alternativas legales que permitan afrontar los conflictos laborales con seguridad y respaldo profesional.",
    services: [
      "Elaboración y revisión de contratos de trabajo.",
      "Asesoramiento sobre remuneraciones y beneficios sociales.",
      "Defensa en casos de despido y reclamaciones laborales.",
      "Patrocinio en conciliaciones y procesos judiciales laborales.",
      "Asesoramiento durante inspecciones y procedimientos ante SUNAFIL.",
      "Prevención de contingencias y cumplimiento de obligaciones laborales.",
    ],
  },
  {
    slug: "administrativo",
    title: "Derecho Administrativo",
    description:
      "Asesoramos a personas y empresas en sus relaciones con las entidades de la Administración Pública. Brindamos orientación y defensa frente a decisiones administrativas, procedimientos y sanciones, procurando el respeto de sus derechos y el cumplimiento de las disposiciones legales.",
    services: [
      "Asesoramiento en procedimientos ante entidades públicas.",
      "Tramitación de licencias, autorizaciones y permisos administrativos.",
      "Interposición de recursos de reconsideración y apelación.",
      "Defensa frente a multas y procedimientos administrativos sancionadores.",
      "Asesoramiento en contrataciones y controversias con el Estado.",
      "Patrocinio en procesos judiciales contencioso-administrativos.",
    ],
  },
  {
    slug: "tributario",
    title: "Derecho Tributario y Asesoría Contable",
    description:
      "Ofrecemos asesoramiento jurídico-tributario y servicios contables orientados al adecuado cumplimiento de las obligaciones fiscales y empresariales. Ayudamos a prevenir contingencias, atender requerimientos de la Administración Tributaria y mantener una gestión contable organizada y conforme a la normativa vigente.",
    services: [
      "Asesoramiento tributario para personas naturales y empresas.",
      "Declaración y cumplimiento de obligaciones tributarias.",
      "Atención de fiscalizaciones y requerimientos de SUNAT.",
      "Reclamaciones, apelaciones y procedimientos tributarios.",
      "Servicios de contabilidad empresarial y elaboración de estados financieros.",
      "Planeamiento tributario y prevención de contingencias fiscales.",
    ],
  },
  {
    slug: "penal",
    title: "Derecho Penal",
    description:
      "Brindamos asesoramiento y defensa jurídica a personas involucradas en investigaciones o procesos penales, tanto en calidad de investigados como de agraviados. Desarrollamos estrategias de defensa respetando las garantías procesales y procurando la protección de los derechos de nuestros patrocinados.",
    services: [
      "Defensa en investigaciones fiscales y procesos penales.",
      "Patrocinio de víctimas, presentación de denuncias y reclamación de reparación civil.",
      "Defensa en delitos patrimoniales: robo, hurto, estafa y apropiación ilícita.",
      "Asesoramiento en delitos contra la Administración Pública y corrupción de funcionarios.",
      "Defensa en delitos económicos, financieros y lavado de activos.",
      "Asistencia en diligencias, audiencias, juicios y recursos penales.",
    ],
  },
  {
    slug: "constitucional",
    title: "Derecho Constitucional",
    description:
      "Brindamos asesoramiento y defensa para la protección de los derechos fundamentales frente a actos u omisiones que puedan vulnerarlos. Evaluamos los mecanismos constitucionales aplicables a cada situación, procurando restablecer los derechos afectados mediante las vías legales correspondientes.",
    services: [
      "Procesos de amparo para la protección de derechos fundamentales.",
      "Procesos de hábeas corpus en defensa de la libertad personal y derechos conexos.",
      "Procesos de hábeas data y protección de datos personales.",
      "Procesos de cumplimiento frente a mandatos legales o administrativos exigibles.",
      "Medidas cautelares y recursos en procesos constitucionales.",
      "Defensa frente a vulneraciones de derechos por autoridades o particulares.",
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
    name: "Mg. Luis Guillén Rivera",
    role: "Contador Público Asociado",
    initials: "LG",
    areas: ["Auditoría Forense", "Peritaje Contable", "Asesoría Tributaria"],
    photo: "/images/equipo/FOTO LUIS GUILLEN.png",
    bio: "Contador Público Colegiado y maestro en Administración, con una amplia trayectoria profesional en auditoría, peritaje contable y gestión financiera. Egresado del Doctorado en Economía, con especializaciones en Auditoría Forense, Auditoría Tributaria, Contrataciones del Estado y Gestión de Riesgos. Ha ejercido funciones como perito contable judicial y forense en el Poder Judicial y el Ministerio Público, interviniendo en investigaciones sobre delitos económicos, corrupción y lavado de activos. Asimismo, preside el Comité Técnico Funcional de Peritaje Contable del Colegio de Contadores Públicos de Lima. Su labor se caracteriza por el rigor técnico, la objetividad y un enfoque estratégico orientado a la prevención de contingencias empresariales.",
    registration: null,
  },
  {
    name: "Mg. Christian García Angulo",
    role: "Abogado Asociado Externo",
    initials: "CG",
    areas: ["Derecho Penal"],
    photo: "/images/equipo/FOTO CHRISTIAN.png",
    bio: "Abogado especializado en Derecho Penal, con una amplia trayectoria profesional en el Ministerio Público, donde adquirió sólida experiencia en la investigación y persecución del delito. Magíster por la Universidad de Jaén, España, y egresado de la Maestría en Derecho Penal por la Universidad Nacional Mayor de San Marcos. Su experiencia en la función fiscal le permite desarrollar una defensa penal estratégica, sustentada en el conocimiento de los procedimientos de investigación, la valoración de los elementos probatorios y las garantías del debido proceso. Su práctica profesional se distingue por el análisis riguroso de cada caso, la construcción de estrategias de defensa y el compromiso con la protección de los derechos e intereses de sus patrocinados.",
    registration: null,
  },
  {
    name: "Mg. Francisco Condeña Carrasco",
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
export const spacesIntro = {
  eyebrow: "SERVICIOS COMPLEMENTARIOS",
  title: "Un espacio profesional cuando lo necesita.",
  description:
    "En LEXCONTERRA GROUP ponemos a su disposición ambientes equipados para desarrollar actividades profesionales, atender clientes, realizar reuniones y participar en audiencias virtuales.",
  extraDescription:
    "Ofrecemos alternativas flexibles por horas o jornadas, en un entorno corporativo que combina privacidad, comodidad y funcionalidad, sin necesidad de asumir el compromiso de una oficina permanente.",
};
export const spaces = [
  {
    title: "Oficinas privadas",
    description:
      "Ambientes independientes y equipados, ideales para profesionales que requieren privacidad, concentración y un espacio adecuado para atender clientes, desarrollar sus actividades o participar en reuniones virtuales.",
    cta: "Consultar disponibilidad de oficinas",
    office: 1,
    image: "/images/Foto_oficinas_privadas.png",
    rates: null,
    availability: null,
    terms: null,
  },
  {
    title: "Salas de reuniones",
    description:
      "Espacios acondicionados para reuniones profesionales, presentaciones, coordinaciones de trabajo y audiencias virtuales, con mobiliario apropiado y recursos tecnológicos que facilitan el desarrollo de sus actividades.",
    cta: "Consultar disponibilidad de salas",
    office: 2,
    image: "/images/Foto_sala_de_reuniones.png",
    rates: null,
    availability: null,
    terms: null,
  },
  {
    title: "Módulos de trabajo",
    description:
      "Estaciones individuales de trabajo destinadas a profesionales que necesitan un ambiente funcional para desarrollar sus actividades, realizar gestiones o trabajar de manera independiente, por períodos determinados.",
    cta: "Consultar disponibilidad de módulos",
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
