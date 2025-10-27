import React from 'react';
import { NodeModel } from '../models';
export interface RenderLazyColumnProps {
    node: NodeModel;
    onAction?: (action: string, rowData?: any) => void;
}
/**
 * RenderLazyColumn - A scrollable column component for rendering lists of items
 *
 * This is the React equivalent of Android's LazyColumn component.
 * It renders a vertical scrollable list of child nodes.
 *
 * For simple lists, this uses standard scrolling. For very large lists (1000+ items),
 * consider using a virtualization library like react-window as a peer dependency.
 */
export declare const RenderLazyColumn: React.FC<RenderLazyColumnProps>;
