import { SxProps, Theme } from '@mui/material';
import { CSSProperties } from 'react';
import { ModifierModel } from '../models/ModifierModel';
import { TextStyleModel } from '../models/TextStyleModel';
/**
 * Converts a ModifierModel to Material-UI sx props
 */
export declare const modifierToSx: (modifier?: ModifierModel) => SxProps<Theme>;
/**
 * Converts a TextStyleModel to CSS properties
 */
export declare const textStyleToCss: (textStyle?: TextStyleModel) => CSSProperties;
/**
 * Converts a TextStyleModel to Material-UI Typography sx props
 */
export declare const textStyleToSx: (textStyle?: TextStyleModel) => SxProps<Theme>;
