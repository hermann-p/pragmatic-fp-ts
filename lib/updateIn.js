"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateIn = void 0;
const mori_1 = __importDefault(require("mori"));
const main_1 = require("./main");
function updateIn(path, fn, dict) {
    if (arguments.length === 1) {
        return function (_fn, _dict) {
            return arguments.length === 1
                ? updateIn(path, _fn)
                : updateIn(path, _fn, _dict);
        };
    }
    else if (arguments.length === 2) {
        return (_dict) => updateIn(path, fn, _dict);
    }
    const p = main_1.getValueOr([], path);
    const d = main_1.getValueOr({}, dict);
    return main_1.chain(d)
        .bind(mori_1.default.toClj)
        .bind((dd) => mori_1.default.updateIn(dd, p, fn))
        .bind(mori_1.default.toJs)
        .getValueOr({});
}
exports.updateIn = updateIn;
