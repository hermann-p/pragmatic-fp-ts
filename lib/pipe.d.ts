import { Mappable } from "./types";
interface PipeFunction<A, B> {
    (input: A): B;
    _<C>(nextFn: Mappable<B, C>): PipeFunction<A, C>;
}
declare class PipeFunction<A, B> extends Function {
    readonly fn: Mappable<A, B>;
    constructor(fn: Mappable<A, B>);
}
export declare const pipe: <A, B>(fn: Mappable<A, B>) => PipeFunction<A, B>;
export {};
