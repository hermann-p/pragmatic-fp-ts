import { Mappable } from "./types.ts";

/**
 * Composes unary functions from right to left, using infix/monadic binding style
 *
 * ```
 * const fn = compose(inc)._(Math.abs)
 * fn(-5) //: 6
 * ```
 */

interface ComposeFunction<A, B> {
  (input: A): B;
  _<C>(after: Mappable<C, A>): ComposeFunction<C, B>;
}

class ComposeFunction<A, B> extends Function {
  readonly fn: Mappable<A, B>;
  constructor(fn: Mappable<A, B>) {
    super();
    this.fn = fn;
    const comp = function (x: A) {
      return fn(x);
    };
    (comp as any)._ = <C>(prevFn: Mappable<C, A>) => new ComposeFunction((x: C) => fn(prevFn(x)));
    return comp as any;
  }
}

export const compose = <A, B>(fn: Mappable<A, B>) => new ComposeFunction(fn);
