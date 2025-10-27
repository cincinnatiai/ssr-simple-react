"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderText = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const utils_1 = require("../utils");
const RenderText = ({ node }) => {
    const text = node.title || node.description || node.label || '';
    const modifierSx = (0, utils_1.modifierToSx)(node.modifier);
    const textStyleSx = (0, utils_1.textStyleToSx)(node.textStyle);
    // If we have modifier styles (layout/container properties), wrap in Box
    const hasModifier = modifierSx && typeof modifierSx === 'object' && !Array.isArray(modifierSx) && Object.keys(modifierSx).length > 0;
    if (hasModifier) {
        return (react_1.default.createElement(material_1.Box, { sx: modifierSx },
            react_1.default.createElement(material_1.Typography, { sx: textStyleSx }, text)));
    }
    return (react_1.default.createElement(material_1.Typography, { sx: textStyleSx }, text));
};
exports.RenderText = RenderText;
