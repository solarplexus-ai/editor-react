"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provider = exports.Context = void 0;
var React = __importStar(require("react"));
var Context = React.createContext({
    zoomRatio: 1,
    activeObject: null,
    contextMenuRequest: null,
    frame: null,
    objects: [],
    editor: null,
    setActiveObject: function () { },
    setContextMenuRequest: function () { },
    setFrame: function () { },
    setObjects: function () { },
    setZoomRatio: function () { },
    setEditor: function () { },
});
exports.Context = Context;
var Provider = function (_a) {
    var children = _a.children;
    var _b = React.useState(1), zoomRatio = _b[0], setZoomRatio = _b[1];
    var _c = React.useState(null), activeObject = _c[0], setActiveObject = _c[1];
    var _d = React.useState(null), frame = _d[0], setFrame = _d[1];
    var _e = React.useState(null), editor = _e[0], setEditor = _e[1];
    var _f = React.useState(null), contextMenuRequest = _f[0], setContextMenuRequest = _f[1];
    var _g = React.useState([]), objects = _g[0], setObjects = _g[1];
    return (React.createElement(Context.Provider, { value: {
            zoomRatio: zoomRatio,
            setZoomRatio: setZoomRatio,
            activeObject: activeObject,
            setActiveObject: setActiveObject,
            frame: frame,
            setFrame: setFrame,
            contextMenuRequest: contextMenuRequest,
            setContextMenuRequest: setContextMenuRequest,
            objects: objects,
            setObjects: setObjects,
            editor: editor,
            setEditor: setEditor,
        } }, children));
};
exports.Provider = Provider;
//# sourceMappingURL=context.js.map