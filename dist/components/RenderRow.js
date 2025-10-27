"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderRow = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const utils_1 = require("../utils");
const RenderNode_1 = require("./RenderNode");
const RenderRow = ({ node, onAction = () => { } }) => {
    return (react_1.default.createElement(material_1.Box, { sx: {
            display: 'flex',
            flexDirection: 'row',
            ...(0, utils_1.modifierToSx)(node.modifier),
            backgroundColor: node.backgroundColor || node.modifier?.backgroundColor,
        } }, node.children?.map((child, index) => (react_1.default.createElement(RenderNode_1.RenderNode, { key: index, node: child, onAction: onAction })))));
};
exports.RenderRow = RenderRow;
