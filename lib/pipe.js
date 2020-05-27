"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pipe extends Function {
    constructor(fn) {
        super();
        this.fn = fn;
        const pipe = function (x) {
            return fn(x);
        };
        pipe._ = (nextFn) => new Pipe((x) => nextFn(fn(x)));
        return pipe;
    }
    _(nextFn) {
        return new Pipe((x) => nextFn(this.fn(x)));
    }
}
exports.pipe = (fn) => new Pipe(fn);
