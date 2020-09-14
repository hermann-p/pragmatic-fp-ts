import { Either, Maybe } from "./main";
import { Effect, Mappable, Monad, UnboxPromise } from "./types";
export declare class Future<T, M extends Monad<T>> {
    readonly value: Promise<M>;
    readonly bindDefault: Mappable<any, M>;
    readonly bindError: Mappable<any, M>;
    constructor(bindDefault: Mappable<any, M>, bindError: Mappable<any, M>, value: M | Promise<M>);
    _<U>(f: Mappable<T, U | Promise<U>>): Future<NonNullable<UnboxPromise<U>>, Monad<NonNullable<UnboxPromise<U>>>>;
    filter(pred: Mappable<T, boolean | Promise<Boolean>>): Future<T, M>;
    effect(f: Effect<T>): Future<T, M>;
    effectAsync(f: Effect<T>): Future<T, M>;
    getValueOr(alt: T): Promise<T>;
    getValue(): Promise<T>;
    getMonad(): Promise<M>;
}
export declare const futureEither: <T>(value: T) => Future<T, Either<T, Error>>;
export declare const futureMaybe: <T>(value: T) => Future<T, Maybe<T>>;
