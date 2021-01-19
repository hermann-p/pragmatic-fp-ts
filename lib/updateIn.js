"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateIn = void 0;
const main_1 = require("./main");
function updateIn(path, fn, dict) {
    if (arguments.length === 1) {
        return function (_fn, _dict) {
            return arguments.length === 1 ? updateIn(path, _fn) : updateIn(path, _fn, _dict);
        };
    }
    else if (arguments.length === 2) {
        return (_dict) => updateIn(path, fn, _dict);
    }
    const p = main_1.getValueOr([], path);
    const d = main_1.getValueOr({}, dict);
    return main_1.chain(d)
        .bind(main_1.getIn(p))
        .bind(fn)
        .bind((result) => main_1.assocIn(path, result, d))
        .getValueOr({});
}
exports.updateIn = updateIn;
