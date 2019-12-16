import { Maybe } from "./Maybe";

export type Mappable<A, B> = (input: A) => B;
export type Endomorphism<A> = (input: A) => A;
export type Predicate<T> = (input: T) => boolean;

export interface MatchPattern<T> {
  [key: string]: any | T;
}

export interface Dictionary {
  [key: string]: any;
  [key: number]: any;
}

export type MaybeType<T> = T | Maybe<T>;

export type Effect<T> = (value: T) => void;
