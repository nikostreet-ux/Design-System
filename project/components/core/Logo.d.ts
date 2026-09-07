import type { CSSProperties } from 'react';
/** Logotipo Rosen. Solo dos tonos permitidos: gris azulado de marca o blanco. */
export interface LogoProps {
  /** dark = #38484E sobre fondos claros; white = sobre color u oscuro. */
  tone?: 'dark' | 'white';
  width?: number;
  /** Prefijo de ruta hacia la raíz del design system (p. ej. "../.."). */
  base?: string;
  style?: CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
