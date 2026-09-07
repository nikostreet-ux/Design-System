Unidad base de todo listado de catálogo Rosen (grid de 4 en desktop, 2 en móvil).

```jsx
<ProductCard category="Colchones" name="Colchón Élite Pocket 2 plazas"
  price={399990} listPrice={569990} image="…" />
```

La imagen hace zoom 1.03 en hover y el borde se oscurece; nunca uses sombras fuertes. El descuento se calcula solo si pasas `listPrice`.
