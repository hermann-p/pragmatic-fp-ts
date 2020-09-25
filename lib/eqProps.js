"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eqProps = void 0;
const main_1 = require("./main");
function eqProps(propName, a, b) {
    if (arguments.length === 1) {
        return function (_a, _b) {
            return arguments.length === 1
                ? eqProps(propName, _a)
                : eqProps(propName, _a, _b);
        };
    }
    else if (arguments.length === 2) {
        return (_b) => eqProps(propName, a, _b);
    }
    return main_1.equals(main_1.getValueOr({}, a)[propName], main_1.getValueOr({}, b)[propName]);
}
exports.eqProps = eqProps;
