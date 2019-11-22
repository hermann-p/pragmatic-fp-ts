import { Effect, MaybeType, Predicate } from "./types.d";
import { Either, Reason } from "./Either";
import { Mappable } from "./types";
import { Monad } from "./Monad";
export declare type Maybe<T> = Just<T> | Nothing<T>;
export declare type MaybePattern<A, B> = {
    just: (value: A) => B;
    nothing: () => B;
};
export declare class Just<T> extends Monad<T> {
    private value;
    constructor(value: T | Just<T>);
    getValue(): T;
    getValueOr(_: T): T;
    isJust(): boolean;
    isNothing(): boolean;
    isMonad(): boolean;
    isMaybe(): boolean;
    bind<B>(fn: Mappable<T, B>): Maybe<B>;
    match<U>(match: MaybePattern<T, U>): Maybe<U>;
    filter(pred: Predicate<T>): Maybe<T>;
    effect(fn: Effect<T>): Maybe<T>;
    toEither(): Either<Reason, T>;
    toString(): string;
}
export declare class Nothing<T> implements Monad<T> {
    getValue(): T;
    getValueOr(alternative: T | Just<T>): T;
    isJust(): boolean;
    isNothing(): boolean;
    isMonad(): boolean;
    isMaybe(): boolean;
    bind<B>(_: Mappable<T, B>): Maybe<B>;
    match<U>(match: MaybePattern<T, U>): Maybe<U>;
    filter(_: Predicate<T>): Maybe<T>;
    effect(_: Effect<T>): Maybe<T>;
    toEither(): Either<Reason, T>;
    toString(): string;
}
export declare const just: <T>(value: T) => Just<T>;
export declare const nothing: <T>() => Nothing<T>;
export declare const maybe: <T>(value: T | Monad<T>) => Maybe<T>;
export declare const maybeFalsy: <T>(value: MaybeType<T>) => Maybe<T>;
export declare const maybeIf: <T>(predicate: MaybeType<Predicate<T>>) => (value: MaybeType<T>) => Maybe<T>;
