import { Either, Maybe } from "./main";
import { Effect, Mappable, Monad, UnboxPromise } from "./types";
export declare class Future<T, M extends Monad<T>> {
    readonly value: Promise<M>;
    readonly bindDefault: Mappable<any, M>;
    readonly bindError: Mappable<any, M>;
    constructor(bindDefault: Mappable<any, M>, bindError: Mappable<any, M>, value: M | Promise<M>);
    _<U, TO = NonNullable<UnboxPromise<U>>>(f: Mappable<T, U | Promise<U>>, errorHint?: string | Error): Future<TO, M extends Either<T> ? Either<TO> : Maybe<TO>>;
    filter(pred: Mappable<T, boolean | Promise<Boolean>>, errorHint?: string | Error): Future<T, M>;
    effect(f: Effect<T>): Future<T, M>;
    effectAsync(f: Effect<T>): Future<T, M>;
    getValueOr(alt: T): Promise<T>;
    getValue(): Promise<T>;
    getMonad(): Promise<M>;
}
declare type FutureEither<T> = Future<T, Either<T, Error>>;
export declare const futureEither: <T>(value: T) => FutureEither<T>;
declare type FutureMaybe<T> = Future<T, Maybe<T>>;
export declare const futureMaybe: <T>(value: T) => FutureMaybe<T>;
export {};
