"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mori_1 = __importDefault(require("mori"));
const main_1 = require("./main");
function dissocIn(path, dict) {
    if (arguments.length === 1) {
        return (theDict) => dissocIn(path, theDict);
    }
    const thePath = main_1.getValue(path);
    const pathPrefix = thePath.slice(0, thePath.length - 1);
    const prop = thePath[thePath.length - 1];
    const theDict = main_1.getValueOr({}, dict);
    return main_1.chain(theDict)
        .bind(mori_1.default.toClj)
        .bind((d) => mori_1.default.updateIn(d, mori_1.default.toClj(pathPrefix), (el) => mori_1.default.dissoc(el, prop)))
        .bind(mori_1.default.toJs)
        .getValue();
}
exports.dissocIn = dissocIn;
