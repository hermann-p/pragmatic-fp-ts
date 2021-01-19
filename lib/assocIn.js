"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assocIn = void 0;
const main_1 = require("./main");
const Queue_1 = __importDefault(require("./tools/Queue"));
const _assocIn = (path, value, coll) => {
    const key = path.pop();
    return main_1.assoc(key, path.isEmpty() ? value : _assocIn(path, value, coll[key]), coll);
};
function assocIn(path, value, coll) {
    if (arguments.length === 1) {
        return function (_value, _coll) {
            return arguments.length === 1 ? assocIn(path, _value) : assocIn(path, _value, _coll);
        };
    }
    else if (arguments.length === 2) {
        return (_coll) => assocIn(path, value, _coll);
    }
    const p = new Queue_1.default(main_1.getValueOr([], path));
    if (p.length === 0) {
        return coll;
    }
    const defaultValue = typeof p.peek() === "number" ? [] : {};
    return coll ? _assocIn(p, value, coll) || defaultValue : defaultValue;
}
exports.assocIn = assocIn;
