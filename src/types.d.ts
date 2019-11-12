import { Monad } from "./Monad";
export type Transducer<A, B> = (input: A) => B;
export type Mappable<T> = (input: T) => T;
export type Predicate<T> = (input: T) => boolean;

export type MatchPattern<T> = { [key: string]: any };
