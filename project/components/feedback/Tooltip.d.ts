import type { ReactNode, CSSProperties } from 'react';
/** Etiqueta emergente slate sobre hover, 12px, radio 2px. */
export interface TooltipProps {
  content?: ReactNode;
  placement?: 'top' | 'bottom';
  children?: ReactNode;
  style?: CSSProperties;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
