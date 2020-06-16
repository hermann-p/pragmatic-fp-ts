import { Mappable } from "./types";
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
declare class ComposeFunction<A, B> extends Function {
    readonly fn: Mappable<A, B>;
    constructor(fn: Mappable<A, B>);
}
export declare const compose: <A, B>(fn: Mappable<A, B>) => ComposeFunction<A, B>;
export {};
