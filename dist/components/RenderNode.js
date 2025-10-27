"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderNode = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const RenderScaffold_1 = require("./RenderScaffold");
const RenderTopBar_1 = require("./RenderTopBar");
const RenderColumn_1 = require("./RenderColumn");
const RenderRow_1 = require("./RenderRow");
const RenderBox_1 = require("./RenderBox");
const RenderCard_1 = require("./RenderCard");
const RenderText_1 = require("./RenderText");
const RenderButton_1 = require("./RenderButton");
const RenderImage_1 = require("./RenderImage");
const RenderTable_1 = require("./RenderTable");
const RenderSpacer_1 = require("./RenderSpacer");
const RenderLazyColumn_1 = require("./RenderLazyColumn");
const RenderNode = ({ node, onAction = () => { } }) => {
    switch (node.type) {
        case 'Scaffold':
            return react_1.default.createElement(RenderScaffold_1.RenderScaffold, { node: node, onAction: onAction });
        case 'TopAppBar':
            return react_1.default.createElement(RenderTopBar_1.RenderTopBar, { node: node });
        case 'Column':
            return react_1.default.createElement(RenderColumn_1.RenderColumn, { node: node, onAction: onAction });
        case 'Row':
            return react_1.default.createElement(RenderRow_1.RenderRow, { node: node, onAction: onAction });
        case 'Box':
            return react_1.default.createElement(RenderBox_1.RenderBox, { node: node, onAction: onAction });
        case 'LazyColumn':
            return react_1.default.createElement(RenderLazyColumn_1.RenderLazyColumn, { node: node, onAction: onAction });
        case 'Card':
            return react_1.default.createElement(RenderCard_1.RenderCard, { node: node, onAction: onAction });
        case 'Text':
            return react_1.default.createElement(RenderText_1.RenderText, { node: node });
        case 'Button':
            return react_1.default.createElement(RenderButton_1.RenderButton, { node: node, onAction: onAction });
        case 'Image':
            return react_1.default.createElement(RenderImage_1.RenderImage, { node: node });
        case 'Table':
            return react_1.default.createElement(RenderTable_1.RenderTable, { node: node, onAction: onAction });
        case 'Spacer':
            return react_1.default.createElement(RenderSpacer_1.RenderSpacer, { node: node });
        default:
            return react_1.default.createElement(material_1.Typography, null,
                "Unknown type: ",
                node.type);
    }
};
exports.RenderNode = RenderNode;
