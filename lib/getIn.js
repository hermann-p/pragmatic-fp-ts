"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIn = void 0;
const main_1 = require("./main");
const _getIn = (path, coll, idx = 0) => {
    if (!coll) {
        return null;
    }
    else if (idx < path.length - 1) {
        return _getIn(path, coll[path[idx]], idx + 1);
    }
    else
        return coll[path[idx]];
};
function getIn(path, coll) {
    if (arguments.length === 1) {
        return (_coll) => getIn(path, _coll);
    }
    return main_1.maybe(coll)
        ._((cc) => _getIn(path, cc, 0))
        .getValueOr(null);
}
exports.getIn = getIn;
