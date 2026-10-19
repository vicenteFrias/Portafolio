import Retrato from '../assets/Retrato.png';

// Estas constantes guardan dibujos SVG como URL de imagen, sin necesitar archivos separados.
// Cada SVG crea una vista previa con el nombre y las tecnologías de un proyecto.
const imgSpringBoot = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300" viewBox="0 0 600 300"><defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%231e3a8a"/><stop offset="100%" stop-color="%232563eb"/></linearGradient></defs><rect width="600" height="300" fill="url(%23g1)"/><text x="50%" y="45%" text-anchor="middle" fill="%23ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="bold">BlackOut-Manager</text><text x="50%" y="65%" text-anchor="middle" fill="%2393c5fd" font-family="system-ui, sans-serif" font-size="16">Spring Boot 3 • MySQL • REST API</text></svg>`;

const imgKotlin = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300" viewBox="0 0 600 300"><defs><linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%237c3aed"/><stop offset="100%" stop-color="%23a855f7"/></linearGradient></defs><rect width="600" height="300" fill="url(%23g2)"/><text x="50%" y="45%" text-anchor="middle" fill="%23ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="bold">EduApp Mobile</text><text x="50%" y="65%" text-anchor="middle" fill="%23e9d5ff" font-family="system-ui, sans-serif" font-size="16">Kotlin • Android Native Architecture</text></svg>`;

const imgReact = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="300" viewBox="0 0 600 300"><defs><linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%230f766e"/><stop offset="100%" stop-color="%2306b6d4"/></linearGradient></defs><rect width="600" height="300" fill="url(%23g3)"/><text x="50%" y="45%" text-anchor="middle" fill="%23ffffff" font-family="system-ui, sans-serif" font-size="28" font-weight="bold">Portafolio & Web React</text><text x="50%" y="65%" text-anchor="middle" fill="%23cffafe" font-family="system-ui, sans-serif" font-size="16">React 19 • Atomic Design • Ant Design</text></svg>`;

/*
 * Lista de proyectos destacados con título, descripción, tecnologías,
 * y una imagen de vista previa.
 */
export const proyectosData = [
    {
        id: 1,
        titulo: 'BlackOut-Manager',
        descripcion: 'Sistema de gestión de eventos y control financiero con arquitectura backend en Spring Boot y persistencia en MySQL.',
        imagen: imgSpringBoot,
        tecnologias: ['Spring Boot 3', 'MySQL', 'REST API'],
    },
    {
        id: 2,
        titulo: 'EduApp',
        descripcion: 'Aplicación móvil nativa para apoyo educativo desarrollada con Kotlin.',
        imagen: imgKotlin,
        tecnologias: ['Kotlin', 'Android SDK', 'Jetpack'],
    },
    {
        id: 3,
        titulo: 'Portafolio Web React',
        descripcion: 'Aplicación Single Page Application (SPA) modular bajo Atomic Design, suite de pruebas Vitest y componentes Ant Design.',
        imagen: imgReact,
        tecnologias: ['React 19', 'Ant Design', 'Vitest'],
    },
];

/*
 * Requerimiento 3: Estudios
 * Detalle de formación académica con institución, título cursado y año de obtención/estado.
 */
export const estudiosData = [
    {
        institucion: 'Duoc UC',
        titulo: 'Analista Programador',
        anio: '2025',
    },
    {
        institucion: 'Universidad de Santiago de Chile',
        titulo: 'Ingeniería Civil Mecatrónica',
        anio: '2021-2023 (Inconclusa)',
    },
];

/*
 * Listado cronológico de antecedentes laborales indicando empresa, cargo,
 * fechas explícitas de inicio y término, y resumen de aportes.
 */
export const experienciasData = [
    {
        cargo: 'Barista',
        empresa: 'Starbucks',
        periodo: 'Noviembre 2023 - Presente',
        descripcion: 'Atención al cliente de alto estándar, trabajo colaborativo en turnos de alta demanda, comunicación efectiva y resolución proactiva de contingencias.',
    },
    {
        cargo: 'Colaborador Multifuncional',
        empresa: 'Falabella Retail',
        periodo: 'Enero 2023 - Diciembre 2023',
        descripcion: 'Gestión logística de inventario, soporte en piso de venta, dinamismo ante contingencias y apoyo continuo al equipo de trabajo.',
    },
];

/*
 * Incluye información personal, fotografía/avatar estilizado, titulación profesional
 * y una breve descripción profesional que responde expresamente a la pregunta "¿Quién soy?".
 */
export const datosPersonales = {
    nombre: 'Vicente Matias Frias Cerda',
    titulo: 'Analista Programador',
    // Descripción profesional que responde a la pregunta obligatoria "¿Quién soy?"
    quienSoy: 'Soy un desarrollador y Analista Programador, con habilidades para proyectos robustos y escalables' +
        'con habilidades blandas desarrolladas y capacidades de trabajar en equipo.',
    email: 'vic.frias@duocuc.cl',
    telefono: '+56 9 6344 2634',
    residencia: 'Maipú, Chile',
    linkedin: 'https://www.linkedin.com/in/vicente-frias-cerda-b0954627a',
    github: 'https://github.com/vicenteFrias',
    foto: Retrato,
};

/*
 * Lista de habilidades y tecnologías principales para el catálogo de competencias
 */
export const habilidadesData = ['Python', 'JavaScript', 'React', 'Kotlin', 'Spring Boot', 'MySQL', 'Ant Design', 'Git'];