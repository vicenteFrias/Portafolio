# Portafolio personal

Este proyecto es una página web para mostrar mi información personal, estudios, experiencia, habilidades y algunos proyectos. Está hecho con React y Vite.

## Cómo funciona

Al abrir la página se muestra la sección personal. La barra de navegación permite cambiar entre las secciones sin cargar otra página. La información que aparece, como los estudios y los proyectos, está guardada en `src/data/portafolioData.jsx`.

La página está separada en componentes para que cada parte sea más fácil de encontrar y modificar. Por ejemplo, hay componentes para mostrar los estudios, los proyectos y la experiencia. El formulario de contacto se abre desde la navegación y permite escribir un mensaje.

## Cómo ejecutar el proyecto

Necesitas tener instalado Node.js y npm.

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Inicia la página en modo de desarrollo:

   ```bash
   npm run dev
   ```

3. Abre en el navegador la dirección que aparece en la terminal.

También puedes generar la versión para publicar con:

```bash
npm run build
```

## Carpetas importantes

- `src/components`: partes reutilizables de la página.
- `src/data`: información del portafolio.
- `src/hooks`: lógica que se reutiliza en algunas partes.
- `src/pages`: página principal.
- `src/tests`: pruebas del proyecto.
