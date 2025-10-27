import React from 'react';
import { NodeModel } from '../models';
export interface RenderButtonProps {
    node: NodeModel;
    onAction?: (action: string) => void;
}
export declare const RenderButton: React.FC<RenderButtonProps>;
