import { Effect, Mappable, Predicate } from "./main";
import { Monad, MonadType } from "./types";
export declare type Either<R, L = Error> = Left<R, L> | Right<R, L>;
declare type EitherMatcher<R, L, B> = {
    left: (err: L) => B;
    right: (val: R) => B;
};
export declare class Left<R, L = Error> extends Monad<R> {
    readonly errorValue: L;
    constructor(errVal: L);
    _<B>(_: Mappable<R, B>, _hint?: L): Either<NonNullable<B>, L>;
    bind: <B>(_: Mappable<R, B>, _hint?: L | undefined) => Either<NonNullable<B>, L>;
    bindM<B>(_: Mappable<Monad<R>, Monad<B>>): Either<NonNullable<B>, L>;
    filter(_: any, _hint?: L): Either<NonNullable<R>, L>;
    effect(_: any): Either<NonNullable<R>, L>;
    getValue(): NonNullable<R>;
    getValueOr(alt: R): R;
    match<B>(matcher: EitherMatcher<R, L, B>): Either<NonNullable<B>, L | Error>;
    isLeft(): boolean;
    isRight(): boolean;
    getReason(): L;
}
export declare class Right<R extends NonNullable<any>, L = Error> extends Monad<R> {
    readonly value: R;
    constructor(value: R);
    _<B>(fn: Mappable<R, B>, hint?: L): Either<NonNullable<B>, L | Error>;
    bind: <B>(fn: Mappable<R, B>, hint?: L | undefined) => Either<NonNullable<B>, Error | L>;
    bindM<B>(fn: Mappable<Monad<R>, Monad<B>>): Either<NonNullable<B>, L | Error>;
    filter(fn: Predicate<R>, hint?: L): Either<NonNullable<R>, L | Error>;
    effect(fn: Effect<R>): Either<NonNullable<R>, L>;
    getValue(): NonNullable<R>;
    getValueOr(_: R): R;
    match<B>(matcher: EitherMatcher<R, L, B>): Either<NonNullable<B>, L>;
    isLeft(): boolean;
    isRight(): boolean;
    getReason(): void;
}
export declare function left<R, L = Error>(errVal: L): Left<R, L>;
export declare function right<R, L = Error>(value: R): Right<R, L>;
export declare function either<R, L = Error>(value: MonadType<R>, errVal?: L): Either<NonNullable<R>, L | Error>;
export declare function isLeft<R = any, L = Error>(el: unknown): el is Left<R, L>;
export declare function isRight<R = any, L = Error>(el: unknown): el is Right<R, L>;
export declare function isEither<R = any, L = Error>(el: unknown): el is Either<R, L>;
export {};
