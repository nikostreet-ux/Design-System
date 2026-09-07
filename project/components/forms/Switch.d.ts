import type { ReactNode, CSSProperties } from 'react';
/** Interruptor de preferencia inmediata (notificaciones, ver solo stock disponible). */
export interface SwitchProps {
  label?: ReactNode;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  style?: CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
