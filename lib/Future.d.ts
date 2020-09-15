import { Either, EitherMatcher, Maybe, MaybeMatcher } from "./main";
import { Effect, Mappable, UnboxPromise } from "./types";
export declare class Future<T, M extends Either<T> | Maybe<T>> {
    readonly value: Promise<M>;
    readonly bindDefault: Mappable<any, M>;
    readonly bindError: Mappable<any, M>;
    constructor(bindDefault: Mappable<any, M>, bindError: Mappable<any, M>, value: M | Promise<M>);
    _<U, TO = NonNullable<UnboxPromise<U>>>(f: Mappable<T, U | Promise<U>>, errorHint?: string | Error): M extends Either<T> ? FutureEither<TO> : FutureMaybe<TO>;
    filter(pred: Mappable<T, boolean | Promise<Boolean>>, errorHint?: string | Error): M extends Either<T> ? FutureEither<T> : FutureMaybe<T>;
    effect(f: Effect<T>): M extends Either<T> ? FutureEither<T> : FutureMaybe<T>;
    match<B = T, MT = M extends Either<T> ? EitherMatcher<T, Error, B> : MaybeMatcher<T, B>, TO = NonNullable<UnboxPromise<B>>>(matcher: MT): M extends Either<any> ? FutureEither<TO> : FutureMaybe<TO>;
    effectAsync(f: Effect<T>): M extends Either<T> ? FutureEither<T> : FutureMaybe<T>;
    getValueOr(alt: T): Promise<T>;
    getValue(): Promise<T>;
    getMonad(): Promise<M>;
    getReason(): Promise<void | Error>;
}
declare type FutureEither<T> = Future<T, Either<T, Error>>;
export declare const futureEither: <T>(value: T) => FutureEither<T>;
declare type FutureMaybe<T> = Future<T, Maybe<T>>;
export declare const futureMaybe: <T>(value: T) => FutureMaybe<T>;
export {};
