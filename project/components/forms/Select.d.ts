import type { CSSProperties } from 'react';
/** Desplegable nativo con chevron Rosen; misma altura y borde que Input. */
export interface SelectProps {
  label?: string;
  /** Strings simples o { value, label }. */
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  disabled?: boolean;
  style?: CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
