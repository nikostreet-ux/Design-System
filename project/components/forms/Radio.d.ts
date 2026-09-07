import type { ReactNode, CSSProperties } from 'react';
/** Opción única dentro de un grupo (tipo de despacho, forma de pago). */
export interface RadioProps {
  label?: ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  value?: string;
  disabled?: boolean;
  style?: CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
