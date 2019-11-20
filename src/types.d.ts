import { Maybe } from "./Maybe";
import { Monad } from "./Monad";

export type Mappable<A, B> = (input: A) => B;
export type Isomorphism<A> = (input: A) => A;
export type Predicate<T> = (input: T) => boolean;

export type MatchPattern<T> = { [key: string]: any };

export type Dictionary = { [key: string]: any; [key: number]: any };

export type MaybeType<T> = T | Maybe<T>;

export type Effect<T> = (value: T) => void;
