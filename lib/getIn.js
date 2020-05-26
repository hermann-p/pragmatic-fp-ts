"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mori_1 = __importDefault(require("mori"));
const main_1 = require("./main");
function getIn(path, coll) {
    if (arguments.length === 1) {
        return (_coll) => getIn(path, _coll);
    }
    return main_1.chain(main_1.getValueOr({}, coll))
        .bind(mori_1.default.toClj)
        .bind((cc) => mori_1.default.getIn(cc, path, null))
        .bind(mori_1.default.toJs)
        .getValueOr(null);
}
exports.getIn = getIn;
