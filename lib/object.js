"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Maybe_1 = require("./Maybe");
const tools_1 = require("./tools");
const predicates_1 = require("./predicates");
const getRaw = (key, path, obj) => {
    const value = obj.bind((input) => input[key]);
    return predicates_1.isEmpty(path) ? value : getRaw(path[0], path.slice(1), value);
};
exports.get = (path) => (container) => {
    try {
        const pathValue = tools_1.getMonadValue(path);
        return getRaw(pathValue[0], pathValue.slice(1), Maybe_1.maybe(container));
    }
    catch (_a) {
        return Maybe_1.nothing();
    }
};
//# sourceMappingURL=object.js.map