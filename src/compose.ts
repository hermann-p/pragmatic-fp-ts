import { Mappable } from "./types";

/**
 * Composes unary functions from right to left, using infix/monadic binding style
 *
 * ```
 * const fn = compose(inc)._(Math.abs)
 * fn(-5) //: 6
 * ```
 */

class Compose<A, B> extends Function {
  readonly fn: Mappable<A, B>;
  constructor(fn: Mappable<A, B>) {
    super();
    this.fn = fn;
    const comp = function (x: A) {
      return fn(x);
    };
    (comp as any)._ = <C>(prevFn: Mappable<C, A>) => new Compose((x: C) => fn(prevFn(x)));
    return comp as any;
  }

  _<C>(prevFn: Mappable<C, A>) {
    return new Compose((x: C) => this.fn(prevFn(x)));
  }
}

export const compose = <A, B>(fn: Mappable<A, B>) => new Compose(fn);
