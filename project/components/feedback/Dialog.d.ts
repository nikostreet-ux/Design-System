import type { ReactNode, CSSProperties } from 'react';
/**
 * Modal centrado con velo slate translúcido y blur de 2px.
 * @startingPoint section="Feedback" subtitle="Modal, toast y tooltip" viewport="700x340"
 */
export interface DialogProps {
  open?: boolean;
  title?: ReactNode;
  onClose?: () => void;
  /** Acciones alineadas a la derecha en un pie separado por línea fina. */
  footer?: ReactNode;
  width?: number;
  children?: ReactNode;
  style?: CSSProperties;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
