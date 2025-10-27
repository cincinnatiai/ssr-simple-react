"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderCard = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const utils_1 = require("../utils");
const RenderNode_1 = require("./RenderNode");
const RenderCard = ({ node, onAction = () => { } }) => {
    return (react_1.default.createElement(material_1.Card, { elevation: node.elevation, sx: {
            ...(0, utils_1.modifierToSx)(node.modifier),
            backgroundColor: node.backgroundColor,
        } },
        react_1.default.createElement(material_1.CardContent, null,
            node.title && (react_1.default.createElement(material_1.Typography, { variant: "h6", sx: (0, utils_1.textStyleToSx)(node.textStyle) }, node.title)),
            node.description && (react_1.default.createElement(material_1.Typography, { variant: "body2", color: "text.secondary" }, node.description)),
            node.children?.map((child, index) => (react_1.default.createElement(RenderNode_1.RenderNode, { key: index, node: child, onAction: onAction }))))));
};
exports.RenderCard = RenderCard;
