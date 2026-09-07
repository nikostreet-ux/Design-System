import type { ReactNode, CSSProperties } from 'react';
/** Tarjeta de producto de catálogo: imagen 4:3, categoría en overline, nombre en Light, precio en Medium. */
export interface ProductCardProps {
  name: string;
  /** Categoría corta en mayúsculas sobre el nombre. */
  category?: string;
  price: number;
  listPrice?: number;
  image?: string;
  /** Badge propio; si se omite y hay listPrice se calcula el % de descuento. */
  badge?: ReactNode;
  /** Placeholder a usar cuando no hay imagen real disponible. */
  imageSlot?: ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
}
export declare function ProductCard(props: ProductCardProps): JSX.Element;
