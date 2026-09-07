import type { CSSProperties } from 'react';
/**
 * Pestañas con subrayado fino — navegación dentro de una ficha o panel.
 * @startingPoint section="Navigation" subtitle="Pestañas y migas de pan" viewport="700x180"
 */
export interface TabsProps {
  tabs?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  style?: CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
