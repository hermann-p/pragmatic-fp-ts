import { Mappable } from "./types";
declare class Pipe<A, B> extends Function {
    readonly fn: Mappable<A, B>;
    constructor(fn: Mappable<A, B>);
    _<C>(nextFn: Mappable<B, C>): Pipe<A, C>;
}
export declare const pipe: <A, B>(fn: Mappable<A, B>) => Pipe<A, B>;
export {};
