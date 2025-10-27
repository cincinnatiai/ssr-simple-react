"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderLazyColumn = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const RenderNode_1 = require("./RenderNode");
const utils_1 = require("../utils");
/**
 * RenderLazyColumn - A scrollable column component for rendering lists of items
 *
 * This is the React equivalent of Android's LazyColumn component.
 * It renders a vertical scrollable list of child nodes.
 *
 * For simple lists, this uses standard scrolling. For very large lists (1000+ items),
 * consider using a virtualization library like react-window as a peer dependency.
 */
const RenderLazyColumn = ({ node, onAction = () => { } }) => {
    const { children = [] } = node;
    return (react_1.default.createElement(material_1.Box, { sx: {
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            ...(0, utils_1.modifierToSx)(node.modifier),
        } }, children.map((child, index) => (react_1.default.createElement(RenderNode_1.RenderNode, { key: index, node: child, onAction: onAction })))));
};
exports.RenderLazyColumn = RenderLazyColumn;
