"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFrame = void 0;
var react_1 = __importDefault(require("react"));
var context_1 = require("../context");
function useFrame() {
    var frame = react_1.default.useContext(context_1.Context).frame;
    return frame;
}
exports.useFrame = useFrame;
//# sourceMappingURL=useFrame.js.map