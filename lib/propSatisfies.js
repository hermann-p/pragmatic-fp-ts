"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.propSatisfies = void 0;
const main_1 = require("./main");
function propSatisfies(path, pred, input) {
    if (arguments.length === 1) {
        return function (_pred, _input) {
            return arguments.length === 1
                ? propSatisfies(path, _pred)
                : propSatisfies(path, _pred, _input);
        };
    }
    else if (arguments.length === 2) {
        return (_input) => propSatisfies(path, pred, _input);
    }
    const propValue = path instanceof Array
        ? main_1.getIn(path, input)
        : main_1.get(path, input);
    try {
        return pred(propValue);
    }
    catch (_a) {
        return false;
    }
}
exports.propSatisfies = propSatisfies;
