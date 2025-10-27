"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderImage = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const utils_1 = require("../utils");
const RenderImage = ({ node }) => {
    const imageStyle = {};
    if (node.imageWidth !== undefined)
        imageStyle.width = node.imageWidth;
    if (node.imageHeight !== undefined)
        imageStyle.height = node.imageHeight;
    return (react_1.default.createElement(material_1.Box, { sx: (0, utils_1.modifierToSx)(node.modifier) },
        react_1.default.createElement("img", { src: node.imageUrl, alt: node.contentDescription || '', style: imageStyle })));
};
exports.RenderImage = RenderImage;
