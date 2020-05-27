import { MonadType, Mappable, Predicate, Effect } from "./main";
import { Monad } from "./types";
export declare class Chain<A> extends Monad<A> {
    readonly __value: A;
    constructor(value: A);
    _<B>(fn: Mappable<A, MonadType<B>>): Chain<B>;
    bind: <B>(fn: Mappable<A, MonadType<B>>) => Chain<B>;
    bindM<B>(fn: Mappable<Monad<A>, Monad<B>>): Chain<B>;
    filter(pred: Predicate<A>): Chain<A>;
    getValue(): A;
    getValueOr(alt: A): A;
    effect(eff: Effect<A>): this;
}
export declare function chain<A>(value: MonadType<A>): Chain<A>;
export declare function isChain(candidate: unknown): boolean;
