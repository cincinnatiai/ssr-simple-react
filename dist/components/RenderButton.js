"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderButton = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const utils_1 = require("../utils");
const RenderButton = ({ node, onAction = () => { } }) => {
    const variant = node.buttonVariant === 'outlined' ? 'outlined' : node.buttonVariant === 'text' ? 'text' : 'contained';
    const sx = {
        ...(0, utils_1.modifierToSx)(node.modifier),
        ...(0, utils_1.textStyleToSx)(node.textStyle),
        ...(node.backgroundColor && { backgroundColor: node.backgroundColor }),
    };
    return (react_1.default.createElement(material_1.Button, { variant: variant, onClick: () => node.action && onAction(node.action), sx: sx }, node.label || node.title || 'Button'));
};
exports.RenderButton = RenderButton;
