"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapIndexed = void 0;
const main_1 = require("./main");
const mapArrayIndexed = (fn, coll) => coll === null || coll === void 0 ? void 0 : coll.map(fn);
const mapObjIndexed = (fn, dict) => dict &&
    Object.keys(dict).reduce((accum, key) => {
        try {
            accum[key] = fn(dict[key], key);
            return accum;
        }
        catch (err) {
            throw new Error(`Error mapping functor over object key ${key}: ${err.text}`);
        }
    }, {});
function mapIndexed(fn, coll) {
    if (arguments.length === 1) {
        return (_coll) => mapIndexed(fn, _coll);
    }
    else {
        const input = main_1.getValue(coll);
        return input instanceof Array
            ? mapArrayIndexed(fn, input)
            : mapObjIndexed(fn, input);
    }
}
exports.mapIndexed = mapIndexed;
