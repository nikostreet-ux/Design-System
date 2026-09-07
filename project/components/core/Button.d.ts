import type { ReactNode, CSSProperties } from 'react';
/**
 * Botón de acción Rosen: mayúsculas, Inter Medium, tracking amplio, radio 2px.
 * @startingPoint section="Core" subtitle="Botones, iconos, tarjetas y badges" viewport="700x220"
 */
export interface ButtonProps {
  /** Jerarquía visual. primary = gris azulado de marca; accent = Rojo Rosen (una sola vez por pantalla). */
  variant?: 'primary' | 'accent' | 'secondary' | 'ghost' | 'inverse' | 'link';
  size?: 'sm' | 'md' | 'lg';
  /** Ocupa todo el ancho del contenedor. */
  full?: boolean;
  disabled?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  /** 'a' para renderizar un enlace. */
  as?: 'button' | 'a';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: CSSProperties;
  children?: ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
