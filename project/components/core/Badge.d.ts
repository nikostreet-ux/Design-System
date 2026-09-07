import type { ReactNode, CSSProperties } from 'react';
/** Etiqueta de estado sobre imágenes de producto y listados (descuento, nuevo, envío). */
export interface BadgeProps {
  tone?: 'sale' | 'slate' | 'neutral' | 'outline';
  style?: CSSProperties;
  children?: ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
