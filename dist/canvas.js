"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canvas = void 0;
var React = __importStar(require("react"));
var core_1 = require("@layerhub-io/core");
var context_1 = require("./context");
var resize_observer_polyfill_1 = __importDefault(require("resize-observer-polyfill"));
var Canvas = function (props) {
    var context = React.useContext(context_1.Context);
    var containerRef = React.useRef(null);
    var _a = React.useState(false), isPanning = _a[0], setIsPanning = _a[1];
    var _b = React.useState({ x: 0, y: 0 }), startPanPosition = _b[0], setStartPanPosition = _b[1];
    var editorRef = React.useRef(null);
    React.useEffect(function () {
        var container = containerRef.current;
        var clientHeight = container.clientHeight, clientWidth = container.clientWidth;
        var editor = new core_1.Editor({
            id: "layerhub_io_canvas",
            config: __assign(__assign({}, props.config), { size: {
                    width: clientWidth,
                    height: clientHeight,
                } }),
            state: context,
        });
        editorRef.current = editor;
        var resizeObserver = new resize_observer_polyfill_1.default(function (entries) {
            var _a = (entries[0] && entries[0].contentRect) || {}, _b = _a.width, width = _b === void 0 ? clientWidth : _b, _c = _a.height, height = _c === void 0 ? clientHeight : _c;
            editor.canvas.resize({
                width: width,
                height: height,
            });
        });
        resizeObserver.observe(container);
        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('wheel', handleWheel);
        return function () {
            editor.destroy();
            if (container) {
                resizeObserver.unobserve(container);
                container.removeEventListener('mousedown', handleMouseDown);
                container.removeEventListener('mousemove', handleMouseMove);
                container.removeEventListener('mouseup', handleMouseUp);
                container.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);
    var handleMouseDown = function (e) {
        setIsPanning(true);
        setStartPanPosition({ x: e.clientX, y: e.clientY });
    };
    var handleMouseMove = function (e) {
        if (!isPanning || !editorRef.current)
            return;
        var dx = e.clientX - startPanPosition.x;
        var dy = e.clientY - startPanPosition.y;
        editorRef.current.canvas.canvas.relativePan({ x: dx, y: dy });
        setStartPanPosition({ x: e.clientX, y: e.clientY });
    };
    var handleMouseUp = function () {
        setIsPanning(false);
    };
    var handleWheel = function (e) {
        e.preventDefault();
        if (editorRef.current) {
            if (e.shiftKey) {
                // Shift + wheel for horizontal scrolling
                editorRef.current.canvas.canvas.relativePan({ x: -e.deltaY, y: 0 });
            }
            else {
                // Normal wheel for vertical scrolling
                editorRef.current.canvas.canvas.relativePan({ x: 0, y: -e.deltaY });
            }
        }
    };
    return (React.createElement("div", { id: "layerhub_io_canvas_container", ref: containerRef, style: { flex: 1, position: "relative", overflow: "hidden" } },
        React.createElement("div", { style: {
                position: "absolute",
                height: "100%",
                width: "100%",
            } },
            React.createElement("canvas", { id: "layerhub_io_canvas" }))));
};
exports.Canvas = Canvas;
//# sourceMappingURL=canvas.js.map