import { getValueOr, MonadType, Mappable, Predicate, Effect } from "./main";

import { Monad } from "./types";

export class Chain<A> extends Monad<A> {
  readonly __value: A;
  constructor(value: A) {
    super();
    this.__value = value;
  }
  bind<B>(fn: Mappable<A, MonadType<B>>): Chain<B> {
    return chain(fn(this.__value));
  }
  bindM<B>(fn: Mappable<Monad<A>, Monad<B>>): Chain<B> {
    return chain(fn(this));
  }
  filter(pred: Predicate<A>): Chain<A> {
    return pred(this.__value) ? this : chain(null as any);
  }
  getValue() {
    return this.__value;
  }
  getValueOr(alt: A) {
    return this.__value || alt;
  }
  effect(eff: Effect<A>) {
    eff(this.__value);
    return this;
  }
}

export function chain<A>(value: MonadType<A>): Chain<A> {
  return new Chain(getValueOr(null as any, value));
}

export function isChain(candidate: unknown) {
  return candidate instanceof Chain;
}
