"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
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
const compose = (fn) => new ComposeFunction(fn);
exports.compose = compose;
