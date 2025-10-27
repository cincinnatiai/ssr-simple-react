"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textStyleToSx = exports.textStyleToCss = exports.modifierToSx = void 0;
/**
 * Converts a ModifierModel to Material-UI sx props
 */
const modifierToSx = (modifier) => {
    if (!modifier)
        return {};
    const sx = {};
    // Dimensions
    if (modifier.height !== undefined)
        sx.height = modifier.height;
    if (modifier.width !== undefined)
        sx.width = modifier.width;
    if (modifier.fillMaxSize) {
        sx.width = '100%';
        sx.height = '100%';
    }
    if (modifier.fillMaxWidth)
        sx.width = '100%';
    if (modifier.weight !== undefined)
        sx.flex = modifier.weight;
    // Padding
    if (modifier.padding !== undefined)
        sx.p = modifier.padding / 8; // Convert to theme spacing
    if (modifier.paddingTop !== undefined)
        sx.pt = modifier.paddingTop / 8;
    if (modifier.paddingBottom !== undefined)
        sx.pb = modifier.paddingBottom / 8;
    if (modifier.paddingStart !== undefined)
        sx.pl = modifier.paddingStart / 8;
    if (modifier.paddingEnd !== undefined)
        sx.pr = modifier.paddingEnd / 8;
    // Background
    if (modifier.backgroundColor)
        sx.backgroundColor = modifier.backgroundColor;
    // Alignment
    if (modifier.horizontalAlignment) {
        const alignMap = { start: 'flex-start', center: 'center', end: 'flex-end' };
        sx.alignItems = alignMap[modifier.horizontalAlignment];
    }
    if (modifier.verticalAlignment) {
        const alignMap = { top: 'flex-start', center: 'center', bottom: 'flex-end' };
        sx.justifyContent = alignMap[modifier.verticalAlignment];
    }
    if (modifier.contentAlignment) {
        const alignmentMap = {
            topStart: { alignItems: 'flex-start', justifyContent: 'flex-start' },
            topCenter: { alignItems: 'center', justifyContent: 'flex-start' },
            topEnd: { alignItems: 'flex-end', justifyContent: 'flex-start' },
            centerStart: { alignItems: 'flex-start', justifyContent: 'center' },
            center: { alignItems: 'center', justifyContent: 'center' },
            centerEnd: { alignItems: 'flex-end', justifyContent: 'center' },
            bottomStart: { alignItems: 'flex-start', justifyContent: 'flex-end' },
            bottomCenter: { alignItems: 'center', justifyContent: 'flex-end' },
            bottomEnd: { alignItems: 'flex-end', justifyContent: 'flex-end' },
        };
        const alignment = alignmentMap[modifier.contentAlignment.toLowerCase()];
        if (alignment) {
            sx.alignItems = alignment.alignItems;
            sx.justifyContent = alignment.justifyContent;
        }
    }
    // Scroll
    if (modifier.verticalScroll) {
        sx.overflowY = 'auto';
    }
    return sx;
};
exports.modifierToSx = modifierToSx;
/**
 * Converts a TextStyleModel to CSS properties
 */
const textStyleToCss = (textStyle) => {
    if (!textStyle)
        return {};
    const style = {};
    if (textStyle.fontSize !== undefined)
        style.fontSize = `${textStyle.fontSize}px`;
    if (textStyle.fontWeight) {
        const weightMap = {
            light: 300,
            normal: 400,
            medium: 500,
            bold: 700,
        };
        style.fontWeight = weightMap[textStyle.fontWeight];
    }
    if (textStyle.textAlign) {
        // Map 'start' and 'end' to 'left' and 'right' for CSS
        const alignMap = {
            start: 'left',
            end: 'right',
            center: 'center',
            left: 'left',
            right: 'right',
        };
        style.textAlign = alignMap[textStyle.textAlign];
    }
    if (textStyle.color)
        style.color = textStyle.color;
    return style;
};
exports.textStyleToCss = textStyleToCss;
/**
 * Converts a TextStyleModel to Material-UI Typography sx props
 */
const textStyleToSx = (textStyle) => {
    if (!textStyle)
        return {};
    const sx = {};
    if (textStyle.fontSize !== undefined)
        sx.fontSize = textStyle.fontSize;
    if (textStyle.fontWeight) {
        const weightMap = {
            light: 300,
            normal: 400,
            medium: 500,
            bold: 700,
        };
        sx.fontWeight = weightMap[textStyle.fontWeight];
    }
    if (textStyle.textAlign) {
        sx.textAlign = textStyle.textAlign;
    }
    if (textStyle.color)
        sx.color = textStyle.color;
    return sx;
};
exports.textStyleToSx = textStyleToSx;
