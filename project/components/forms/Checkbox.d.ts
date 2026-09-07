import type { ReactNode, CSSProperties } from 'react';
/** Casilla cuadrada 18px para filtros y consentimientos. */
export interface CheckboxProps {
  label?: ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
