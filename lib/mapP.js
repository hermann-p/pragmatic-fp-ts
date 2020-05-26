"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function mapP(fn, coll) {
    if (arguments.length === 1) {
        return (_coll) => mapP(fn, _coll);
    }
    return main_1.chain(coll)
        .bind((elements) => elements.map((element) => fn(element).then(main_1.getValue)))
        .bind((promises) => Promise.all(promises))
        .getValue();
}
exports.mapP = mapP;
