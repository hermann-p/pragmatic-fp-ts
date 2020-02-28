import { Mappable, MatchPattern, Effect } from "./types";
export declare abstract class Monad<T> {
    abstract bind<B>(fn: Mappable<T, B | Monad<B>>): Monad<B>;
    abstract bindM<B>(fn: Mappable<Monad<T>, B | Monad<B>>): Monad<B>;
    abstract getValue(): T;
    abstract getValueOr(alternate: T): T;
    abstract match(matches: MatchPattern<T>): Monad<any>;
    abstract isMonad(): boolean;
    abstract effect(fn: Effect<T>): Monad<T>;
}
