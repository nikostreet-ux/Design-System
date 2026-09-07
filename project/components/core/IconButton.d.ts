import type { ReactNode, CSSProperties } from 'react';
/** Botón cuadrado de un solo icono (buscar, carro, favoritos, cerrar). */
export interface IconButtonProps {
  variant?: 'ghost' | 'outline' | 'solid' | 'inverse';
  size?: 'sm' | 'md' | 'lg';
  /** Obligatorio: texto accesible, no se muestra. */
  label: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: CSSProperties;
  children?: ReactNode;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
