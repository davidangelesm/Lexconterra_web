# LEXCONTERRA GROUP

Web corporativa multipágina con Next.js 16.4.2 App Router, React, TypeScript, Tailwind CSS 4 y Lucide React. Mantiene el directorio `app/` del proyecto original. No utiliza backend, formularios, autenticación ni bases de datos.

## Ejecutar

Requiere Node.js >= 20.9 (se verificó con Node 22) y npm.

```sh
npm ci
npm run dev
```

Abrir `http://localhost:3000`. Para verificar producción:

```sh
npm run lint
npm run build
npm run start
```

## Páginas reales

| Página | Ruta |
| --- | --- |
| Inicio | `/` |
| Nosotros | `/nosotros` |
| Áreas de práctica | `/areas-de-practica` |
| Espacios profesionales | `/espacios-profesionales` |
| Equipo | `/equipo` |
| Instalaciones | `/instalaciones` |
| Ubicación | `/ubicacion` |
| Contacto | `/contacto` |

Cada ruta tiene su propio `page.tsx`, título, descripción, canonical y Open Graph con el dominio oficial. También se generan `/sitemap.xml`, `/robots.txt` y una página 404. El encabezado y pie son compartidos; Servicios funciona con clic o toque y teclado. Escape cierra los menús. La navegación utiliza `next/link`.

## Edición de contenido

- `data/site.ts`: contactos, navegación, áreas, cinco profesionales y espacios. Los `slug` de áreas permiten añadir páginas individuales posteriormente.
- `components/`: encabezado interactivo, pie y elementos reutilizables.
- `lib/metadata.ts`: configuración SEO por página.
- `lib/images.ts`: detección de imágenes originales durante la compilación.
- `app/globals.css`: identidad visual, breakpoints y estados accesibles.
- Fuentes Inter y Playfair Display incluidas localmente mediante Fontsource; no requieren Google Fonts ni conexiones externas al renderizar.

## Imágenes y datos pendientes

Los seis archivos originales no estaban en el repositorio. La correspondencia exacta de nombres está documentada en [`public/images/README.md`](public/images/README.md). Colocarlos en `public/images/` y ejecutar un nuevo build. El hero utiliza exclusivamente la fotografía **05**; la galería utiliza 01–04. Los placeholders son explícitos y no representan oficinas ficticias. El texto de marca es provisional hasta recibir el logotipo original.

Pendientes antes de publicar:

- Logo original y cinco fotografías de oficina.
- Retratos autorizados, reseñas y colegiaturas: campos `photo`, `bio`, `registration` actualmente `null` en `team`. Confirmar las denominaciones profesionales suministradas.
- Revisar la correspondencia de fotografías con las categorías de espacios; tarifas, disponibilidad y condiciones permanecen `null` hasta confirmación.
- Confirmar hosting. No se han modificado DNS ni publicado el sitio.

No se publican horarios, precios, aforos, RUC, razón social, redes sociales ni datos registrales no proporcionados. El mapa usa una consulta por dirección; la geocodificación depende de Google Maps. Verificar visualmente su resultado desde la red de publicación. No se envían mensajes automáticamente: WhatsApp, correo y teléfono se abren por acción del visitante.

## Verificación reproducible

Con el servidor de producción iniciado y Google Chrome instalado:

```sh
npm run test:site
```

Para otro puerto, definir `TEST_URL`, por ejemplo en PowerShell:

```powershell
$env:TEST_URL = 'http://127.0.0.1:3001'
npm run test:site
```

Las pruebas Playwright comprueban las ocho rutas, enlaces internos, títulos únicos, canonical, Open Graph, imágenes, fuentes, 404, WhatsApp, correo, ausencia de desbordamiento horizontal, menú móvil y submenú. Las capturas quedan en `test-results/` (ignorado por Git). No contactan a clientes ni verifican la disponibilidad externa de WhatsApp o Google Maps.

Se verificó build de producción, TypeScript, ESLint y pruebas de navegador en 1440 px y 390 px. El mapa externo puede depender de conexión y políticas de terceros.

## Alojamiento

La configuración actual prerenderiza todas las páginas. Se puede desplegar en cualquier alojamiento compatible con Node.js y Next.js: instalar con `npm ci`, compilar con `npm run build` y ejecutar `npm run start` detrás de HTTPS. Conservar `.next/`, `public/`, dependencias y configuración. No se necesita base de datos ni variables secretas. Configurar el dominio `https://www.lexconterragroup.com` y la redirección de variantes en el proveedor elegido. Reconstruir cuando cambien textos, imágenes o el año del copyright.

**Alternativa de hosting estático:** el contenido es compatible conceptualmente con exportación estática. Cuando se elija ese hosting, añadir `output: 'export'`, `trailingSlash: true` e `images: { unoptimized: true }` a `next.config.ts`, y `export const dynamic = 'force-static'` a `app/robots.ts` y `app/sitemap.ts`. Recompilar y verificar `out/`, incluyendo acceso directo a cada directorio y entrega de `404.html`. En ese modo se pierde el optimizador de imágenes de Next.js: preparar tamaños comprimidos antes de publicar. Esta alternativa no está activada ni verificada; la entrega probada es el build estándar prerenderizado con optimización de imágenes.

No aplicar una reescritura global hacia `index.html`: cada página debe conservar su HTML y URL.

## Dependencias

La auditoría npm durante la entrega reportó cinco avisos altos en la cadena de desarrollo `eslint-config-next → fast-glob → micromatch → braces`. La solución automática propuesta degradaba ESLint de Next a una versión mayor anterior, por lo que no se aplicó `npm audit fix --force`. Revisar una corrección compatible de esa cadena antes de actualizar el entorno de desarrollo. No corresponde a lógica de formularios o backend del sitio.
