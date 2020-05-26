"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
function concat(head, tail) {
    if (arguments.length === 1) {
        return (_tail) => concat(head, _tail);
    }
    const _head = main_1.getValue(head);
    const _tail = main_1.getValue(tail);
    if (_tail instanceof Array || _head instanceof Array) {
        const theHead = ((_head !== null && _head !== void 0 ? _head : []));
        const theTail = ((_tail !== null && _tail !== void 0 ? _tail : []));
        const result = new Array(theHead.length + theTail.length);
        for (let i = 0; i < theHead.length; ++i)
            result[i] = theHead[i];
        for (let i = theHead.length, j = 0; j < theTail.length; ++i, ++j)
            result[i] = theTail[j];
        return result;
    }
    else {
        return main_1.getValueOr("", head) + main_1.getValueOr("", tail);
    }
}
exports.concat = concat;
