import { TextStyleModel } from './TextStyleModel';
export interface TableColumnModel {
    header: string;
    weight?: number;
    width?: number;
    horizontalAlignment?: 'start' | 'center' | 'end' | 'left' | 'right';
    textStyle?: TextStyleModel;
    headerStyle?: TextStyleModel;
}
