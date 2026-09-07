import type { CSSProperties } from 'react';
/** Migas de pan del catálogo: Inicio / Colchones / Colchón Élite. */
export interface BreadcrumbProps {
  items?: Array<string | { label: string; href?: string }>;
  style?: CSSProperties;
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;
