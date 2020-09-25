"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.project = void 0;
const main_1 = require("./main");
function project(keys, coll) {
    if (arguments.length === 1)
        return (_coll) => project(keys, _coll);
    return (coll !== null && coll !== void 0 ? coll : []).map(main_1.pick(keys));
}
exports.project = project;
