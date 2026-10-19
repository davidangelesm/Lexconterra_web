# Imágenes originales pendientes

Copiar los originales sin modificar su identidad, usando exactamente esta correspondencia:

| Original | Archivo en esta carpeta |
| --- | --- |
| `LOGO ELEGIDO 00.jpeg` | `logo-lexconterra.jpeg` |
| `FOTOS OFICINA (1)(2).jpeg` | `oficina-01.jpeg` |
| `FOTOS OFICINA (2)(2).jpeg` | `oficina-02.jpeg` |
| `FOTOS OFICINA (3)(2).jpeg` | `oficina-03.jpeg` |
| `FOTOS OFICINA (4)(2).jpeg` | `oficina-04.jpeg` |
| `FOTOS OFICINA (5)(2).jpeg` | `oficina-05.jpeg` |

La imagen 05 está reservada como imagen principal del inicio. Las imágenes 01–04 aparecen en Instalaciones. En Espacios profesionales, comprobar qué imagen corresponde a cada categoría y ajustar `spaces` en `data/site.ts` antes de publicar.

`lib/images.ts` detecta los archivos al compilar. Mientras no estén presentes, muestra `office-pending.svg`, un marcador gráfico explícito sin fotografías ficticias. La marca temporal es texto, no un rediseño del logo. Recompilar tras incorporar las imágenes.

Guardar los futuros retratos autorizados en `equipo/` y editar los campos `photo` de `data/site.ts`. No cambiar la extensión de una imagen de otro formato para simular un JPEG.
