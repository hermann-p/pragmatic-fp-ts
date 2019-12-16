import { Maybe } from "./Maybe";
export declare type Mappable<A, B> = (input: A) => B;
export declare type Endomorphism<A> = (input: A) => A;
export declare type Predicate<T> = (input: T) => boolean;
export interface MatchPattern<T> {
    [key: string]: any | T;
}
export interface Dictionary {
    [key: string]: any;
    [key: number]: any;
}
export declare type MaybeType<T> = T | Maybe<T>;
export declare type Effect<T> = (value: T) => void;
