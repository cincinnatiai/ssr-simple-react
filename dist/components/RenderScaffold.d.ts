import React from 'react';
import { NodeModel } from '../models';
export interface RenderScaffoldProps {
    node: NodeModel;
    onAction?: (action: string, rowData?: any) => void;
}
export declare const RenderScaffold: React.FC<RenderScaffoldProps>;
