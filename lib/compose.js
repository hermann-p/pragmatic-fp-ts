"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ComposeFunction extends Function {
    constructor(fn) {
        super();
        this.fn = fn;
        const comp = function (x) {
            return fn(x);
        };
        comp._ = (prevFn) => new ComposeFunction((x) => fn(prevFn(x)));
        return comp;
    }
}
exports.compose = (fn) => new ComposeFunction(fn);
