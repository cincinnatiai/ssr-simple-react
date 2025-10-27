import React from 'react';
import { NodeModel } from '../models';
export interface RenderNodeProps {
    node: NodeModel;
    onAction?: (action: string, rowData?: any) => void;
}
export declare const RenderNode: React.FC<RenderNodeProps>;
