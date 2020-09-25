"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dissoc = void 0;
const mori_1 = __importDefault(require("mori"));
const main_1 = require("./main");
function dissoc(propName, dict) {
    if (arguments.length === 1) {
        return (theDict) => dissoc(propName, theDict);
    }
    const thePropName = main_1.getValue(propName);
    const theDict = main_1.getValueOr({}, dict);
    return main_1.chain(theDict)
        .bind(mori_1.default.toClj)
        .bind((d) => mori_1.default.dissoc(d, thePropName))
        .bind(mori_1.default.toJs)
        .getValue();
}
exports.dissoc = dissoc;
