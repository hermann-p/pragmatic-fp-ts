import { Mappable, MatchPattern } from "./types";

export abstract class Monad<T> {
  abstract bind<B>(fn: Mappable<T, B>): Monad<B>;
  abstract getValue(): T;
  abstract getValueOr(alternate: T): T;
  abstract match(matches: MatchPattern<T>): Monad<any>;
  abstract isMonad(): boolean;
}
