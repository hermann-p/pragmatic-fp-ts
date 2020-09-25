"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.props = void 0;
function props(propNames, dict) {
    if (arguments.length === 1) {
        return (d) => props(propNames, d);
    }
    return propNames.map((propName) => (dict || {})[propName]);
}
exports.props = props;
