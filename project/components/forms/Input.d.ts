import type { ReactNode, CSSProperties } from 'react';
/**
 * Campo de texto de una línea, 46px de alto, radio 2px.
 * @startingPoint section="Forms" subtitle="Campos, selects y controles de selección" viewport="700x320"
 */
export interface InputProps {
  label?: string;
  hint?: string;
  /** Mensaje de error; tiñe el borde en Rojo Rosen. */
  error?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  iconRight?: ReactNode;
  style?: CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
