import type { ReactNode, CSSProperties } from 'react';
/** Chip de filtro seleccionable/removible (colores, tamaños, filtros activos). */
export interface TagProps {
  selected?: boolean;
  removable?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
  style?: CSSProperties;
  children?: ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;
