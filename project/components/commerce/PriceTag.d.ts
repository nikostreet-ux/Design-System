import type { CSSProperties } from 'react';
/**
 * Precio en Inter Medium (la única excepción de peso que fija el manual) con precio lista tachado.
 * @startingPoint section="Commerce" subtitle="Tarjeta de producto y precios" viewport="700x400"
 */
export interface PriceTagProps {
  /** Precio vigente en CLP, sin formato. */
  price: number;
  /** Precio normal tachado, opcional. */
  listPrice?: number;
  size?: 'sm' | 'md' | 'lg';
  style?: CSSProperties;
}
export declare function PriceTag(props: PriceTagProps): JSX.Element;
