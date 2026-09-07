# Rosen · Design System

Sistema de diseño de **Rosen**, empresa chilena de descanso y hogar fundada en 1958 en Temuco. Fabrica y comercializa colchones, muebles tapizados, textil para el hogar y ropa de cama con operación verticalmente integrada: producción propia, logística y postventa propias, y venta a través de 36 tiendas propias, canal mayorista B2B y e-commerce. Presencia en Chile, Perú, Argentina, Bolivia y Colombia.

El sistema debe servir dos frentes con el mismo lenguaje: piezas **B2C** (retail y e-commerce, más imagen y ambiente) y materiales **corporativos/comerciales B2B** (más sobrios, densos y tabulares).

## Fuentes recibidas
| Fuente | Qué aportó |
|---|---|
| `uploads/Manual-Rosen.pdf` (9 páginas) | Colores corporativos con Pantone/CMYK/RGB/HEX, grises de apoyo, grises web, familia Inter y escala de títulos, reglas de uso del logotipo |
| `uploads/logo-rosen.webp` | Logotipo horizontal en gris azulado (833×186 px) |
| Notas del brief | Jerarquía de pesos Light/Medium, tono visual, contexto de negocio B2C+B2B |

**No se recibió** código, Figma, sitio web ni fotografía de marca. Todo lo que aquí no proviene del manual está marcado como decisión del sistema o como placeholder.

---

## Índice

**Raíz**
- `styles.css` — único punto de entrada CSS (solo `@import`)
- `thumbnail.html` — tile de la marca
- `readme.md` (este archivo), `SKILL.md`

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`

**`assets/`** — `logo-rosen.webp` (original), `logo-rosen-slate.png`, `logo-rosen-white.png`

**`guidelines/`** — 21 fichas de fundaciones (grupos Colors, Type, Spacing, Brand) visibles en la pestaña Design System

**`components/`**
| Grupo | Componentes |
|---|---|
| `core/` | Button, IconButton, Icon, Logo, Card, Badge, Tag |
| `forms/` | Input, Textarea, Select, Checkbox, Radio, Switch |
| `navigation/` | Tabs, Breadcrumb |
| `feedback/` | Dialog, Toast, Tooltip |
| `commerce/` | ProductCard, PriceTag |

**`ui_kits/`**
- `ecommerce/` — rosen.cl: Home, Catálogo, Ficha de producto, Carro (navegable)
- `b2b/` — Portal Mayorista: Login, Resumen, Lista de precios, Detalle de pedido (navegable)

### Adiciones intencionales
El manual entregado no define inventario de componentes, así que se autoró el set estándar. Cuatro piezas se agregaron por necesidad del negocio y se declaran aquí:
- **Icon** — envoltorio del set Lucide (el manual no define iconografía propia).
- **Logo** — para que ningún consumidor recoloree o deforme el logotipo por su cuenta.
- **ProductCard** y **PriceTag** — el manual habla explícitamente de "tarjetas de producto" y del peso Medium para precios; sin estas piezas la regla no es aplicable.

---

## CONTENT FUNDAMENTALS

**Idioma:** español de Chile, siempre. Precios en pesos chilenos con punto de miles y sin decimales (`$399.990`). Medidas en el vocabulario local: *1 plaza, 1.5 plazas, 2 plazas, King*. Impuestos explicitados (*IVA incluido* en B2C, *precios netos* en B2B).

**Persona:** hablamos de nosotros como **nosotros** y al cliente como **tú** (nunca "usted", tampoco en B2B). *"Fabricamos lo que vendemos."* / *"Coordina el día de entrega en el checkout."*

**Tono:** sobrio y concreto. La marca vende fábrica, garantía y postventa propias, no aspiración vacía. Se afirma el hecho verificable antes del adjetivo: *"Colchones fabricados en nuestra planta de Temuco, con garantía de fábrica y despacho a todo Chile"* — no *"la experiencia definitiva del descanso"*.

**Casing:** títulos en *sentence case* (`Dormir bien no es un lujo`), nunca Title Case a la inglesa. Mayúsculas espaciadas solo en elementos funcionales: labels, overlines, labels de botón, badges. Nombres de producto tal cual el catálogo: `Colchón Élite Pocket 2 plazas`.

**Longitud:** titulares de 2 a 6 palabras; párrafos de apoyo de 1 a 2 frases (máx. ~200 caracteres). Labels de botón de 1 a 3 palabras, siempre en verbo imperativo: *Agregar al carro, Ver colchones, Ir a pagar, Solicita tu cuenta*.

**Signos:** se escriben las tildes y la ñ, y se abren interrogaciones y exclamaciones (`¿Aún no eres cliente mayorista?`). Se usa el guion largo con espacios (— ) para aposiciones; no se usan puntos suspensivos decorativos.

**Emoji: nunca.** Ni en producto, ni en marketing, ni en la interfaz. Los estados se comunican con Badge + icono Lucide.

**B2C vs B2B:** en B2C la frase lleva beneficio (*"Retiro sin costo en 36 tiendas"*); en B2B lleva dato (*"Pedido mínimo mayorista: 6 unidades por SKU"*). El vocabulario B2B es operativo: SKU, planta, neto, línea de crédito, lista vigente.

**Vacíos y errores:** se dicen sin drama y con salida. *"RUT incompleto"*, *"Vista no definida en las fuentes entregadas"*. Nunca en primera persona del sistema ("¡Uy, algo salió mal!").

---

## VISUAL FOUNDATIONS

### Color
Dos colores corporativos y nada más: **Slate Rosen `#38484E`** (Pantone 432C, el color del logotipo) como color estructural — textos de título, botones primarios, sidebar, footer, hero; y **Rojo Rosen `#C12637`** (Pantone 200C) como acento estrictamente racionado: descuentos, outlet, alertas, badge de carro. Regla práctica: **un solo elemento rojo por pantalla**. El precio nunca va en rojo; el rojo va en el badge de descuento.

Apoyo: `#CDD2D1` mist, `#7C8886` stone (texto secundario), `#000000`. Digital: `#F5F5F5` (fondo de sección y de dashboard), `#EEEEEE` (bordes finos, divisores), `#CCCCCC` (bordes de control), `#4C4C4C` (texto de cuerpo). El manual declara que la jerarquía queda a criterio del diseñador; esta es la jerarquía que fija el sistema.

Máximo **dos fondos por pieza**: blanco + `#F5F5F5`, o blanco + slate para bloques de contraste. Los estados hover/press se derivan en `oklch()` bajando la luminosidad 5% y 10% — nunca se introduce un color nuevo.

### Tipografía
**Inter es la única familia**, en dos pesos. **Light (300)** por defecto: todos los títulos (18px y superiores), párrafos y nombres de producto — es el peso que acompaña el trazo fino del logotipo. **Medium (500)** solo en dos casos que fija el manual: precios en tarjetas de producto y subtítulos pequeños de 14–16px. No se usan Regular, SemiBold ni Bold; si algo necesita destacar, se sube el tamaño o se cambia el color, no el peso.

Escala del manual: 60 / 48 / 36 / 24 / 18px. Cuerpo 16px, secundario 14px, legal 12px, overline 11px. Interlineado 1.5 en párrafo, 1.25 en título, 1.1 en display. Tracking negativo (−0.02em) en 48–60px; +0.08em en mayúsculas funcionales; +0.22em en overlines editoriales, el gesto que el propio manual usa en sus portadas (`M A N U A L  D E  M A R C A`).

### Espaciado y layout
Base 4px: 4·8·12·16·24·32·48·64·96·128. Contenedor máximo 1360px con gutter de 24px; secciones separadas por 96px en B2C y 24px en superficies densas B2B. Grillas: catálogo de 3–4 columnas en desktop, categorías de 5, dashboard de 4 KPIs. El header de e-commerce es sticky (anuncio + buscador + nav de categorías); los filtros de catálogo son sticky a 150px; la sidebar B2B es fija a 248px de ancho.

### Fondos e imaginería
Sin degradados, sin texturas, sin patrones repetidos, sin ilustración dibujada. Los fondos son planos: blanco, `#F5F5F5` o slate. El contraste se consigue con bloques full-bleed de color o de foto a media página, no con capas.

La fotografía debe ser de ambiente real de dormitorio y hogar, en **luz natural fría y neutra**, sin filtro cálido ni grano, saturación baja, dominante gris-azulada que dialogue con el slate. Formatos: 4:3 para producto y hero, 1:1 para categorías y miniaturas, 21:9 para franjas full-bleed. **El manual entregado no incluye fotografía**, así que todos los kits usan placeholders etiquetados con su formato; ver `guidelines/brand-imageria.html`.

### Bordes, radios y sombras
Los bordes son **siempre de 1px**; lo que cambia es el gris (`#EEEEEE` divisores, `#CCCCCC` controles, slate en foco). Radios muy contenidos: **2px** por defecto (botones, inputs, badges, tooltips), 4px en tarjetas y paneles, 8px excepcional, y pill **únicamente** en chips de filtro (Tag) y contadores circulares. Nada de esquinas de 12–16px: la marca es de trazo fino y ángulo casi recto.

Las sombras son teñidas en slate y muy tenues (6–12% de opacidad): `xs` para separaciones mínimas, `sm` en hover de tarjeta, `md` en toasts y menús, `lg` solo en modales. **Una tarjeta en reposo no tiene sombra**: tiene borde. Sin sombras internas. Sin "capsulas" ni degradados de protección sobre foto: si el texto va sobre imagen, se usa un bloque sólido slate al lado o encima, nunca un fade.

### Movimiento
Transiciones cortas y planas: 120ms en micro-estados, 200ms en hover/foco/apertura, 400ms solo en el zoom de imagen de producto (`scale(1.03)`). Easing único `cubic-bezier(.4,0,.2,1)`. **Nada de rebotes, resortes ni entradas escalonadas.** Los desplazamientos son de 1–4px como máximo (tarjeta que sube 2px, botón que baja 1px al presionar). Los modales entran con fundido, sin escalado dramático.

### Estados
- **Hover:** relleno → 5% más oscuro; contorno → el borde pasa a slate; ghost → fondo slate al 8%; tarjeta → borde `#CCCCCC` + sombra `sm` + `translateY(-2px)`; enlace → pasa a Rojo Rosen.
- **Press:** `translateY(1px)` y luminosidad −10%. Nunca escalado hacia abajo.
- **Focus:** borde slate de 1px en campos; anillo `--shadow-focus` (blanco + slate) cuando hace falta accesibilidad sobre fondo de color.
- **Disabled:** opacidad 0.4 y `pointer-events:none`. No se recolorea a gris.
- **Selected:** relleno slate con texto blanco (Tag, Tabs activo con subrayado de 1px).

### Transparencia y blur
Uso mínimo y siempre funcional: velo de modal en slate al 55% con `blur(2px)`; navegación activa en sidebar con blanco al 12%; acento de estado con `--accent-quiet` (rojo al 8%) como fondo de fila. Nunca glassmorphism, nunca tarjetas translúcidas.

---

## ICONOGRAPHY

El manual de marca **no define iconografía**: no hay set propio, ni icon font, ni SVGs entregados. Sustitución documentada:

- **Set: [Lucide](https://lucide.dev) 0.544.0**, cargado desde `https://unpkg.com/lucide-static@0.544.0/icons/<nombre>.svg`. Elegido porque su trazo abierto, terminaciones redondeadas y geometría de 24px son lo más cercano al trazo fino y las curvas del logotipo Rosen.
- **Trazo 1.5** (no el 2 por defecto de Lucide) para acompañar la delgadez del logotipo. Tamaños: 16px en línea de texto, 18–20px en botones y listas, 24–26px en franjas de servicio.
- Color por herencia (`currentColor`): slate en la mayoría de casos, blanco sobre fondos oscuros, rojo solo en alertas.
- El componente `Icon` resuelve el SVG desde CDN y lo inyecta inline para que herede el color. Los iconos **no se copiaron al repositorio** porque el entorno no permite descargar binarios de terceros — si se requiere operación offline, hay que bajar el paquete `lucide-static` a `assets/icons/`.
- **Emoji: nunca.** Tampoco caracteres unicode como iconos (✓, ★ decorativos, flechas tipográficas). Única excepción tolerada: las estrellas de rating del catálogo, pendientes de reemplazo por icono real.
- **Logotipo:** en `assets/`. `logo-rosen.webp` es el original entregado; `logo-rosen-slate.png` y `logo-rosen-white.png` son recoloreos mecánicos del mismo archivo (los dos únicos tonos permitidos). No existe versión vertical ni monograma en las fuentes: **no se dibujó ninguna**.

---

## Sustituciones y vacíos a resolver
1. **Inter** se sirve desde Google Fonts vía `@import` en `tokens/fonts.css` — no se recibieron binarios de fuente. Si Rosen tiene licencia y archivos propios (woff2), reemplazar por `@font-face` locales.
2. **Iconos Lucide** por CDN — sustitución, no set oficial.
3. **Fotografía de marca ausente**: todos los espacios de imagen son placeholders etiquetados.
4. **Logotipo vertical** mencionado en el manual pero no entregado como archivo.
5. Los **UI kits** son aplicaciones del sistema al negocio descrito, no recreaciones de rosen.cl ni de un portal existente (no se entregó código ni Figma).
