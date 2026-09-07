import type { CSSProperties } from 'react';
/** Icono Lucide (trazo 1.5) cargado desde CDN — el set sustituto documentado para Rosen. */
export interface IconProps {
  /** Nombre kebab-case de Lucide, p. ej. "search", "shopping-cart", "heart". */
  name: string;
  size?: number;
  /** Grosor de trazo; 1.5 por defecto para acompañar el trazo fino de la marca. */
  strokeWidth?: number;
  color?: string;
  style?: CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
