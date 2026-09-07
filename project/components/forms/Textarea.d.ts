import type { CSSProperties } from 'react';
/** Campo multilínea (comentarios de pedido, solicitudes mayoristas). */
export interface TextareaProps {
  label?: string;
  hint?: string;
  rows?: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  style?: CSSProperties;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
