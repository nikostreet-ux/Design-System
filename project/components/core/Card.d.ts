import type { ReactNode, CSSProperties } from 'react';
/** Contenedor base: borde gris fino, radio 4px, sombra solo cuando flota. */
export interface CardProps {
  variant?: 'flat' | 'elevated' | 'subtle' | 'inverse';
  padding?: string;
  /** Eleva y sube 2px al pasar el mouse (usar en tarjetas clicables). */
  hoverable?: boolean;
  as?: keyof JSX.IntrinsicElements;
  style?: CSSProperties;
  children?: ReactNode;
}
export declare function Card(props: CardProps): JSX.Element;
