import { Effect } from "./types.d";
import { Mappable, Predicate } from "./types";
import { Maybe } from "./Maybe";
import { Monad } from "./Monad";
export declare type Either<L, R> = Left<L, R> | Right<L, R>;
export declare type Reason = Error | string;
export declare type EitherPattern<A, B> = {
    right: (value: A) => B;
    left: () => B;
};
export declare class Right<L, R> implements Monad<R> {
    private readonly value;
    constructor(value: R | Monad<R>);
    bind<R2>(fn: Mappable<R, R2>): Either<Reason, R2>;
    match<R2>(pattern: EitherPattern<R, R2>): Either<L, R2>;
    getValue(): R;
    getValueOr(): R;
    getReason(): L;
    effect(fx: Effect<R>): Either<L, R>;
    isMonad(): boolean;
    isLeft(): boolean;
    isRight(): boolean;
    toMaybe(): Maybe<R>;
    toString(): string;
}
export declare class Left<L, R> implements Monad<R> {
    private readonly reason;
    constructor(reason: L);
    bind<R2>(_: Mappable<R, R2>): Either<Reason, R2>;
    match<R2>(pattern: EitherPattern<R, R2>): Either<L, R2>;
    getValue(): any;
    getValueOr(alternative: R): R;
    getReason(): L;
    effect(_: Effect<R>): Either<L, R>;
    isMonad(): boolean;
    isLeft(): boolean;
    isRight(): boolean;
    toMaybe(): Maybe<R>;
    toString(): string;
}
export declare const right: <L, R>(value: R | Monad<R>) => Right<L, R>;
export declare const left: <L, R>(reason: L) => Left<L, R>;
export declare const either: <L, R>(value: R | Monad<R>) => Either<L, R>;
export declare const eitherIf: <Reason_1, R>(pred: Predicate<R>) => (value: R | Monad<R>) => Right<Reason_1, R> | Left<Reason_1, R>;
export declare const eitherNullable: <R>(value: R | Monad<R>) => Right<unknown, any> | Left<unknown, any>;
