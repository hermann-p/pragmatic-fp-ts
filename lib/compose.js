"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Composes unary functions from right to left, using infix/monadic binding style
 *
 * ```
 * const fn = compose(inc)._(Math.abs)
 * fn(-5) //: 6
 * ```
 */
class Compose extends Function {
    constructor(fn) {
        super();
        this.fn = fn;
        const comp = function (x) {
            return fn(x);
        };
        comp._ = (prevFn) => new Compose((x) => fn(prevFn(x)));
        return comp;
    }
    _(prevFn) {
        return new Compose((x) => this.fn(prevFn(x)));
    }
}
exports.compose = (fn) => new Compose(fn);
