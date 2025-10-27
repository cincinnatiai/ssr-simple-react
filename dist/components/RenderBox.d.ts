import React from 'react';
import { NodeModel } from '../models';
export interface RenderBoxProps {
    node: NodeModel;
    onAction?: (action: string, rowData?: any) => void;
}
export declare const RenderBox: React.FC<RenderBoxProps>;
