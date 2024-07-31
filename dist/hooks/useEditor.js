"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEditor = void 0;
var react_1 = __importDefault(require("react"));
var context_1 = require("../context");
function useEditor() {
    var editor = react_1.default.useContext(context_1.Context).editor;
    return editor;
}
exports.useEditor = useEditor;
//# sourceMappingURL=useEditor.js.map