"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const checkIfPathExists = (path, obj) => main_1.isEmpty(path)
    ? !main_1.isNil(obj)
    : main_1.isEmpty(obj)
        ? false
        : checkIfPathExists(path.slice(1), obj[path[0]]);
function hasIn(path, dict) {
    if (arguments.length === 1) {
        return (_dict) => hasIn(path, _dict);
    }
    const thePath = main_1.getValueOr([], path);
    const theDict = main_1.getValueOr({}, dict);
    if (main_1.isEmpty(thePath) || main_1.isEmpty(theDict)) {
        return false;
    }
    return checkIfPathExists(thePath, theDict);
}
exports.hasIn = hasIn;
