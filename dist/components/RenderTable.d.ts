import React from 'react';
import { NodeModel } from '../models';
export interface RenderTableProps {
    node: NodeModel;
    onAction?: (action: string, rowData?: any) => void;
}
export declare const RenderTable: React.FC<RenderTableProps>;
