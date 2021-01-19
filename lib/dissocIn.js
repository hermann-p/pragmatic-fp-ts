"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dissocIn = void 0;
const main_1 = require("./main");
function dissocIn(path, dict) {
    if (arguments.length === 1) {
        return (theDict) => dissocIn(path, theDict);
    }
    const thePath = main_1.getValue(path);
    const pathPrefix = thePath.slice(0, thePath.length - 1);
    const prop = thePath[thePath.length - 1];
    const theDict = main_1.getValueOr({}, dict);
    return main_1.updateIn(pathPrefix, main_1.dissoc(prop), theDict);
}
exports.dissocIn = dissocIn;
