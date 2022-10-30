import { either } from "./Either";
import { chain, Chain, Either, Maybe } from "./main";
import { maybe } from "./Maybe";
import { Monad } from "./types";

// "map"
function bind<A, B>(
  f: (_: A) => B
): <M extends Monad<A>>(
  _: M
) => M extends Maybe<A> ? Maybe<B> : M extends Chain<any> ? Chain<B> : Either<B, any>;

function bind<A, B>(f: (_: A) => B) {
  return (m: Monad<any>) => m._(f);
}

// "bind"
function bindM<A, B>(f: (_: A) => Maybe<B>): (_: Maybe<A>) => Maybe<B>;
function bindM<A, B>(f: (_: A) => Either<B>): (_: Either<A>) => Either<B>;
function bindM<A, B>(f: (_: A) => Chain<B>): (_: Chain<A>) => Chain<B>;
function bindM(f: (_: any) => any) {
  return (m: Monad<any>) => lift(m._(f)) as any;
}

const of = (m: any) => (v: any) =>
  m.isJust() || m.isNothing() ? maybe(v) : m.isLeft() || m.isRight() ? either(v) : chain(v);

function lift<A>(_: Maybe<Monad<A>>): Maybe<A>;
function lift<A>(_: Either<Monad<A>>): Either<A>;
function lift<A>(_: Chain<Monad<A>>): Chain<A>;
function lift(m: any) {
  return of(m.getValueOr(undefined)) as any;
}

export { bind, bindM, lift };
