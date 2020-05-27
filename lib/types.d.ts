export declare type Mappable<A, B> = (input: A) => B;
export declare type Endomorphism<A> = Mappable<A, A>;
export declare type Predicate<A> = (input: A) => boolean;
export declare type Effect<A> = (input: A) => unknown;
export declare type MonadType<A> = A | Monad<A>;
export declare type Dictionary<T extends any = any> = {
    [key: string]: T;
};
export declare type Comparator<A> = (a: A, b: A) => number;
export declare type Equality<A> = (a: A, b: A) => boolean;
export declare type BasicComparable = number | string | Date;
export declare type Foldable<TValues, TResult> = (accum: TResult, value: TValues) => TResult;
export declare type LensPath = number | string | (number | string)[];
export declare type ArgTypes<F extends Function> = F extends (...args: infer A) => any ? A : never;
export declare type GetLength<original extends any[]> = original extends {
    length: infer L;
} ? L : never;
declare type Prev<T extends number> = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62][T];
export declare type GetLast<original extends any[]> = original[Prev<GetLength<original>>];
declare type Transform<A, B extends Monad<A>> = (monad: Monad<A>) => B;
export declare abstract class Monad<A> {
    abstract bind<B>(fn: Mappable<A, B>): MonadType<B>;
    abstract _<B>(fn: Mappable<A, B>): MonadType<B>;
    abstract bindM<B>(fn: Mappable<Monad<A>, MonadType<B>>): Monad<B>;
    abstract filter(fn: Predicate<A>): Monad<A>;
    abstract effect(fn: Effect<A>): Monad<A>;
    abstract getValue(): A;
    abstract getValueOr(alt: A): A;
    to<B extends Monad<A>>(transform: Transform<A, B>): ReturnType<typeof transform>;
}
export {};
