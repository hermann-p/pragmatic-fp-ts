import { Monad } from "./Monad";
export type Mappable<A, B> = (input: A) => B;
export type Predicate<T> = (input: T) => boolean;

export type MatchPattern<T> = { [key: string]: any };
