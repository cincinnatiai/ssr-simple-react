"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSRRenderer = void 0;
const react_1 = __importDefault(require("react"));
const components_1 = require("./components");
const SSRRenderer = ({ jsonString, nodeModel, onAction = () => { } }) => {
    const [error, setError] = react_1.default.useState(null);
    const [parsedNode, setParsedNode] = react_1.default.useState(null);
    react_1.default.useEffect(() => {
        if (nodeModel) {
            setParsedNode(nodeModel);
            setError(null);
        }
        else if (jsonString) {
            try {
                const parsed = JSON.parse(jsonString);
                setParsedNode(parsed);
                setError(null);
            }
            catch (err) {
                setError(`Failed to parse JSON: ${err}`);
                setParsedNode(null);
            }
        }
    }, [jsonString, nodeModel]);
    if (error) {
        return react_1.default.createElement("div", { style: { color: 'red', padding: 16 } }, error);
    }
    if (!parsedNode) {
        return react_1.default.createElement("div", { style: { padding: 16 } }, "No content to display");
    }
    return react_1.default.createElement(components_1.RenderNode, { node: parsedNode, onAction: onAction });
};
exports.SSRRenderer = SSRRenderer;
