import React from 'react';
import { NodeModel } from '../models';
export interface RenderCardProps {
    node: NodeModel;
    onAction?: (action: string, rowData?: any) => void;
}
export declare const RenderCard: React.FC<RenderCardProps>;
