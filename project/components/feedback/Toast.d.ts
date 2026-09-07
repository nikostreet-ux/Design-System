import type { ReactNode, CSSProperties } from 'react';
/** Aviso efímero; el acento va en una línea superior de 2px, nunca en un fondo de color. */
export interface ToastProps {
  tone?: 'info' | 'sale' | 'neutral';
  title?: ReactNode;
  description?: ReactNode;
  onClose?: () => void;
  icon?: ReactNode;
  style?: CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
