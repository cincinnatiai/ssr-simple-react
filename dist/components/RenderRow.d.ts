import React from 'react';
import { NodeModel } from '../models';
export interface RenderRowProps {
    node: NodeModel;
    onAction?: (action: string, rowData?: any) => void;
}
export declare const RenderRow: React.FC<RenderRowProps>;
