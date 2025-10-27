import React from 'react';
import { NodeModel } from './models';
export interface SSRRendererProps {
    jsonString?: string;
    nodeModel?: NodeModel;
    onAction?: (action: string, data?: any) => void;
}
export declare const SSRRenderer: React.FC<SSRRendererProps>;
