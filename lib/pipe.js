"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
class PipeFunction extends Function {
    constructor(fn) {
        super();
        this.fn = fn;
        const pipe = function (x) {
            return fn(x);
        };
        pipe._ = (nextFn) => new PipeFunction((x) => nextFn(fn(x)));
        return pipe;
    }
}
const pipe = (fn) => new PipeFunction(fn);
exports.pipe = pipe;
