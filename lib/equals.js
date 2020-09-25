"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.equals = void 0;
const mori_1 = __importDefault(require("mori"));
const main_1 = require("./main");
function equals(a, b) {
    if (arguments.length === 1) {
        return (_b) => equals(a, _b);
    }
    const valA = main_1.when(main_1.isMonad, main_1.getValue, a);
    const valB = main_1.when(main_1.isMonad, main_1.getValue, b);
    return mori_1.default.equals(mori_1.default.toClj(main_1.getValue(valA)), mori_1.default.toClj(main_1.getValue(valB)));
}
exports.equals = equals;
