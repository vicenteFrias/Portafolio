# Portafolio personal

Este proyecto es un portafolio web personal hecho con React. Sirve para presentar información personal, estudios, experiencia laboral, habilidades y proyectos. La interfaz está en español y se adapta a distintos tamaños de pantalla.

## Qué hace el proyecto

La página permite:

- Ver una presentación personal con datos de contacto y enlaces a LinkedIn y GitHub.
- Cambiar entre las secciones de información, proyectos, experiencia, estudios y habilidades usando el menú lateral.
- Abrir una ventana de contacto con un formulario que valida el nombre, el correo y el mensaje.
- Consultar una lista de proyectos con su descripción, tecnologías usadas e imagen de vista previa.

El formulario de contacto es una demostración: al enviarlo muestra una confirmación y registra los datos en la consola del navegador. No envía correos ni guarda la información en un servidor.

## Cómo funciona

`src/main.jsx` es el punto de entrada. Allí React carga el componente `App`, que configura el idioma y los colores de Ant Design y muestra la página `Inicio`.

`src/pages/Inicio.jsx` controla qué sección se ve. Guarda la sección seleccionada y decide qué componente mostrar. Al elegir “Contacto”, abre el formulario en una ventana en vez de cambiar la sección principal.

`src/components/templates/PortafolioTemplate.jsx` define la distribución general: menú lateral, contenido de la sección y pie de página. Los componentes dentro de `src/components/organisms` forman secciones completas, como el perfil, los estudios o los proyectos. Las tarjetas y elementos más pequeños están en `src/components/molecules`; los elementos reutilizables más simples están en `src/components/atoms`.

La información que aparece en la página está en `src/data/portafolioData.jsx`. Allí se pueden cambiar los textos, los enlaces, los estudios, las experiencias y las habilidades. Las imágenes de vista previa de los proyectos se guardan como dibujos SVG dentro de constantes y se usan como imágenes en las tarjetas.

Los hooks de `src/hooks` contienen lógica reutilizable:

- `useProyectos` obtiene la lista local de proyectos y controla el indicador de carga que se muestra brevemente.
- `useContacto` controla el estado de envío y reinicio del formulario de contacto.

## Organización de carpetas

```text
src/
├── assets/                  # Imágenes del portafolio
├── components/
│   ├── atoms/               # Elementos pequeños reutilizables
│   ├── molecules/           # Tarjetas y elementos formados por piezas pequeñas
│   ├── organisms/           # Secciones completas de la página
│   └── templates/           # Distribución general de la página
├── data/                    # Información que se muestra en el portafolio
├── hooks/                   # Lógica reutilizable
├── pages/                   # Página principal y navegación entre secciones
└── tests/                   # Pruebas automatizadas
```

## Cómo ejecutar el proyecto

Necesitas tener Node.js y npm instalados. Desde la carpeta del proyecto, ejecuta:

```bash
npm install
npm run dev
```

Abre en el navegador la dirección que indique la terminal.

Para crear una versión lista para publicar:

```bash
npm run build
```

## Pruebas y revisión del código

Las pruebas automatizadas se ejecutan con:

```bash
npm test
```

Para revisar el código con ESLint:

```bash
npm run lint
```
