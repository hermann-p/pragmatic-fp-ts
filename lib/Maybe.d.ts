import { Effect, Mappable, Predicate } from "./main";
import { Monad } from "./types";
export declare type Maybe<A> = Just<A> | Nothing<A>;
declare type MaybeMatcher<A, B> = {
    just: Mappable<NonNullable<A>, B>;
    nothing: () => B;
};
export declare class Nothing<A> extends Monad<A> {
    _<B>(_: Mappable<A, B>): Maybe<NonNullable<B>>;
    bind: <B>(_: Mappable<A, B>) => Maybe<NonNullable<B>>;
    bindM<B>(_: Mappable<Monad<A>, Monad<B>>): Maybe<NonNullable<B>>;
    filter(_: any): Maybe<NonNullable<A>>;
    effect(_: any): Maybe<NonNullable<A>>;
    getValue(): A;
    getValueOr(alt: A): A;
    match<B>(matcher: MaybeMatcher<A, B>): Maybe<NonNullable<B>>;
    isNothing(): boolean;
    isJust(): boolean;
}
export declare class Just<A> extends Monad<A> {
    readonly value: A;
    constructor(value: A);
    _<B>(fn: Mappable<A, B>): Maybe<NonNullable<B>>;
    bind: <B>(fn: Mappable<A, B>) => Maybe<NonNullable<B>>;
    bindM<B>(fn: Mappable<Monad<A>, Monad<B>>): Maybe<NonNullable<B>>;
    filter(fn: Predicate<A>): Maybe<NonNullable<A>>;
    effect(fn: Effect<A>): Maybe<NonNullable<A>>;
    getValue(): NonNullable<A>;
    getValueOr(_: A): A;
    match<B>(matcher: MaybeMatcher<A, B>): Maybe<NonNullable<B>>;
    isNothing(): boolean;
    isJust(): boolean;
}
export declare const just: <T>(value: T) => Just<T>;
export declare const nothing: <T>() => Nothing<T>;
export declare const maybe: <U, T = NonNullable<U>>(value: U | Monad<U>) => Maybe<T>;
export declare const isJust: (x: unknown) => boolean;
export declare const isNothing: (x: unknown) => boolean;
export declare const isMaybe: (x: unknown) => boolean;
export {};
