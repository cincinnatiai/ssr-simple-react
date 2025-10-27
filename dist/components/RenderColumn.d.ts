import React from 'react';
import { NodeModel } from '../models';
export interface RenderColumnProps {
    node: NodeModel;
    onAction?: (action: string, rowData?: any) => void;
}
export declare const RenderColumn: React.FC<RenderColumnProps>;
