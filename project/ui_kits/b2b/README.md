# UI kit — Portal Mayorista Rosen (B2B)

Superficie corporativa/comercial: el portal donde distribuidores, hoteles e institucionales revisan lista de precios, stock y pedidos. Construido con las mismas fundaciones que el kit B2C pero con densidad mayor, menos imagen y el Rojo Rosen reducido a estados de alerta.

No se entregó código ni Figma de un portal existente: estas pantallas son una aplicación del sistema a un caso B2B declarado en el brief, **no** una recreación de un producto real.

## Pantallas
| Archivo | Vista |
|---|---|
| `Login.jsx` | Acceso con RUT de empresa, panel de marca a la izquierda |
| `Shell.jsx` | Barra lateral, topbar con cliente activo |
| `Dashboard.jsx` | KPIs de cuenta, pedidos recientes, alertas de stock |
| `PriceList.jsx` | Lista de precios mayorista con filtros y carga rápida |
| `OrderDetail.jsx` | Detalle de pedido, línea de tiempo de despacho |

Abrir `index.html`: el login es funcional (cualquier valor entra) y la navegación lateral cambia de vista.
