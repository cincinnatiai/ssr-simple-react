"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderTopBar = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const utils_1 = require("../utils");
const RenderTopBar = ({ node }) => {
    return (react_1.default.createElement(material_1.AppBar, { position: "static", sx: { backgroundColor: node.backgroundColor } },
        react_1.default.createElement(material_1.Toolbar, null,
            react_1.default.createElement(material_1.Typography, { variant: "h6", sx: { flexGrow: 1, ...(0, utils_1.textStyleToSx)(node.textStyle) } }, node.title || ''))));
};
exports.RenderTopBar = RenderTopBar;
