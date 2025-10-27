"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderTable = void 0;
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const utils_1 = require("../utils");
const RenderTable = ({ node, onAction = () => { } }) => {
    const { columns = [], tableData = [], showBorders, headerBackgroundColor, rowAction, roundedCorners, useLazyColumn = true } = node;
    const getAlignment = (align) => {
        if (align === 'start' || align === 'left')
            return 'left';
        if (align === 'end' || align === 'right')
            return 'right';
        if (align === 'center')
            return 'center';
        return 'inherit';
    };
    const getColumnWidth = (column) => {
        if (column.width !== undefined)
            return `${column.width}px`;
        if (column.weight !== undefined) {
            const totalWeight = columns.reduce((sum, col) => sum + (col.weight || 1), 0);
            return `${(column.weight / totalWeight) * 100}%`;
        }
        return 'auto';
    };
    return (react_1.default.createElement(material_1.TableContainer, { component: material_1.Paper, variant: showBorders ? 'outlined' : 'elevation', sx: {
            ...(0, utils_1.modifierToSx)(node.modifier),
            borderRadius: roundedCorners ? `${roundedCorners}px` : undefined,
            // Enable scrolling for table body when useLazyColumn is true
            maxHeight: useLazyColumn ? '500px' : undefined,
            overflow: useLazyColumn ? 'auto' : undefined,
        } },
        react_1.default.createElement(material_1.Table, { size: "small", stickyHeader: useLazyColumn },
            react_1.default.createElement(material_1.TableHead, null,
                react_1.default.createElement(material_1.TableRow, null, columns.map((column, colIndex) => (react_1.default.createElement(material_1.TableCell, { key: colIndex, align: getAlignment(column.horizontalAlignment), sx: {
                        backgroundColor: headerBackgroundColor,
                        width: getColumnWidth(column),
                        borderRight: showBorders && colIndex < columns.length - 1 ? '1px solid rgba(224, 224, 224, 1)' : undefined,
                        ...(0, utils_1.textStyleToCss)(column.headerStyle),
                    } }, column.header))))),
            react_1.default.createElement(material_1.TableBody, null, tableData.map((row, rowIndex) => (react_1.default.createElement(material_1.TableRow, { key: rowIndex, hover: !!rowAction, onClick: () => rowAction && onAction(rowAction, row), sx: {
                    cursor: rowAction ? 'pointer' : 'default',
                } }, row.map((cell, colIndex) => {
                const column = columns[colIndex];
                const cellTextStyle = cell.textStyle || column?.textStyle;
                return (react_1.default.createElement(material_1.TableCell, { key: colIndex, align: getAlignment(column?.horizontalAlignment), onClick: (e) => {
                        if (cell.action) {
                            e.stopPropagation();
                            onAction(cell.action, cell);
                        }
                    }, sx: {
                        backgroundColor: cell.backgroundColor,
                        borderRight: (showBorders && cell.showBorder !== false && colIndex < row.length - 1)
                            ? '1px solid rgba(224, 224, 224, 1)'
                            : undefined,
                        cursor: cell.action ? 'pointer' : undefined,
                        ...(0, utils_1.textStyleToCss)(cellTextStyle),
                        ...(0, utils_1.modifierToSx)(cell.modifier),
                    } }, cell.text));
            }))))))));
};
exports.RenderTable = RenderTable;
