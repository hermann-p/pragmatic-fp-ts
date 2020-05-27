import { Mappable } from "./types";
/**
 * Composes unary functions from right to left, using infix/monadic binding style
 *
 * ```
 * const fn = compose(inc)._(Math.abs)
 * fn(-5) //: 6
 * ```
 */
declare class Compose<A, B> extends Function {
    readonly fn: Mappable<A, B>;
    constructor(fn: Mappable<A, B>);
    _<C>(prevFn: Mappable<C, A>): Compose<C, B>;
}
export declare const compose: <A, B>(fn: Mappable<A, B>) => Compose<A, B>;
export {};
