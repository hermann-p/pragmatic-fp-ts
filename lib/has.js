"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.has = void 0;
const main_1 = require("./main");
function has(propName, dict) {
    if (arguments.length === 1)
        return (theDict) => has(propName, theDict);
    else
        return Object.keys(main_1.getValueOr({}, dict)).includes(main_1.getValue(propName));
}
exports.has = has;
