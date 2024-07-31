"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useZoomRatio = void 0;
var react_1 = __importDefault(require("react"));
var context_1 = require("../context");
function useZoomRatio() {
    var zoomRatio = react_1.default.useContext(context_1.Context).zoomRatio;
    return zoomRatio;
}
exports.useZoomRatio = useZoomRatio;
//# sourceMappingURL=useZoomRatio.js.map