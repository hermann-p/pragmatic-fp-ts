import { Effect, Mappable, Predicate } from "./main";
import { Monad, MonadType } from "./types";
export declare type Either<R extends NonNullable<any>, L = Error> = Left<R, L> | Right<R, L>;
declare type EitherMatcher<R extends NonNullable<any>, L, B> = {
    left: (err: L) => B;
    right: (val: R) => B;
};
export declare class Left<R extends NonNullable<any>, L = Error> extends Monad<R> {
    readonly errorValue: L;
    constructor(errVal: L);
    _<B>(_: Mappable<R, B>): Either<B, L>;
    bind: <B>(_: Mappable<R, B>) => Either<B, L>;
    bindM<B>(_: Mappable<Monad<R>, Monad<B>>): Either<B, L>;
    filter(_: any): Either<R, L>;
    effect(_: any): Either<R, L>;
    getValue(): R;
    getValueOr(alt: R): R;
    match<B>(matcher: EitherMatcher<R, L, B>): Either<B, L | Error>;
}
export declare class Right<R extends NonNullable<any>, L = Error> extends Monad<R> {
    readonly value: R;
    constructor(value: R);
    _<B>(fn: Mappable<R, B>): Either<B, L | Error>;
    bind: <B>(fn: Mappable<R, B>) => Either<B, Error | L>;
    bindM<B>(fn: Mappable<Monad<R>, Monad<B>>): Either<B, L | Error>;
    filter(fn: Predicate<R>): Either<R, L | Error>;
    effect(fn: Effect<R>): Either<R, L>;
    getValue(): R;
    getValueOr(_: R): R;
    match<B>(matcher: EitherMatcher<R, L, B>): Either<B, L>;
}
export declare function left<R, L = Error>(errVal: L): Left<R, L>;
export declare function right<R, L = Error>(value: R): Right<R, L>;
export declare function either<R, L = Error>(value: MonadType<R>, errVal?: L): Either<R, L | Error>;
export declare function isLeft<R = any, L = Error>(el: unknown): el is Left<R, L>;
export declare function isRight<R = any, L = Error>(el: unknown): el is Right<R, L>;
export declare function isEither<R = any, L = Error>(el: unknown): el is Either<R, L>;
export {};
