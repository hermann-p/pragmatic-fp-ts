"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mori_1 = __importDefault(require("mori"));
const main_1 = require("./main");
function assocIn(path, value, coll) {
    if (arguments.length === 1) {
        return function (_value, _coll) {
            return arguments.length === 1
                ? assocIn(path, _value)
                : assocIn(path, _value, _coll);
        };
    }
    else if (arguments.length === 2) {
        return (_coll) => assocIn(path, value, _coll);
    }
    const p = main_1.getValueOr([], path);
    if (p.length === 0) {
        return coll;
    }
    const defaultValue = typeof p[0] === "number" ? [] : {};
    return main_1.chain(main_1.getValueOr(defaultValue, coll))
        .bind(mori_1.default.toClj)
        .bind((cc) => mori_1.default.assocIn(cc, path, main_1.getValueOr(null, value)))
        .bind(mori_1.default.toJs)
        .getValueOr(defaultValue);
}
exports.assocIn = assocIn;
