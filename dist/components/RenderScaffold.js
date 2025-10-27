"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderScaffold = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const RenderNode_1 = require("./RenderNode");
const RenderScaffold = ({ node, onAction = () => { } }) => {
    return (react_1.default.createElement(material_1.Box, { sx: { display: 'flex', flexDirection: 'column', height: '100vh' } },
        node.topBar && react_1.default.createElement(RenderNode_1.RenderNode, { node: node.topBar, onAction: onAction }),
        react_1.default.createElement(material_1.Box, { sx: { flex: 1, overflow: 'auto' } }, node.content && react_1.default.createElement(RenderNode_1.RenderNode, { node: node.content, onAction: onAction })),
        node.floatingActionButton && (react_1.default.createElement(material_1.Fab, { color: "primary", sx: { position: 'fixed', bottom: 16, right: 16 }, onClick: () => node.floatingActionButton?.action && onAction(node.floatingActionButton.action) }, node.floatingActionButton.label || '+'))));
};
exports.RenderScaffold = RenderScaffold;
