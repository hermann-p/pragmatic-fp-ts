[pragmatic-fp-ts](README.md) › [Globals](globals.md)

# pragmatic-fp-ts

# pragmatic-fp-ts

A library for functional programming in TypeScript. Curried, total
functions, Maybe/Either monads.

> There's not enough JavaScript libraries to choose from.
-- no one, never

This is a quick implementation of most of the FP tools I need in may
daily work. Typings are kept as as simple as possible, although this
may include some dirty castings under the hood. Still, it is quite
shiny when seen from the outside.

All functions are curried, there is no optional currying. This is
mainly because I develop this lib in my spare time but need it
available at work. As multi-arg functions are meant to be used in
chaining, this should not be too much of a burden. I plan on
implementing `ramda`-like flexible currying in the future, but it is
not a top priority and will not break the existing API.

All functions are total and will always return Maybe/Either
types. Exceptions are caught automatically and converted to
Nothing/Left, except when it could be very confusing for a function to
return.

# Usability primer

An elaborated readme will follow

## Base functions, Types and monad constructors

``` javascript
const l = require("pragmatic-fp-ts")
require("./lib/main")
{
  Monad: [Function: Monad],
  Just: [Function: Just],
  Nothing: [Function: Nothing],
  just: [Function],
  nothing: [Function],
  maybe: [Function],
  maybeFalsy: [Function],
  maybeIf: [Function],
  Right: [Function: Right],
  Left: [Function: Left],
  right: [Function],
  left: [Function],
  either: [Function],
  eitherIf: [Function],
  eitherNullable: [Function],
  head: [Function],
  first: [Function],
  tail: [Function],
  last: [Function],
  reverse: [Function],
  take: [Function],
  takeWhile: [Function],
  sortBy: [Function],
  map: [Function],
  mapOr: [Function],
  mapJust: [Function],
  filter: [Function],
  reject: [Function],
  isIn: [Function: isIn],
  contains: [Function: contains],
  includes: [Function: contains],
  cons: [Function],
  conj: [Function],
  join: [Function],
  append: [Function: append],
  prepend: [Function],
  rest: [Function],
  butLast: [Function],
  insertAt: [Function: insertAt],
  removeAt: [Function: removeAt],
  get: [Function],
  identity: [Function],
  complement: [Function],
  invert: [Function],
  not: [Function],
  negate: [Function],
  flip: [Function],
  ifElse: [Function],
  when: [Function],
  unless: [Function],
  isNil: [Function],
  isFunction: [Function],
  isNaN: [Function],
  isString: [Function],
  isArray: [Function],
  isNumber: [Function],
  isObject: [Function],
  isEmpty: [Function],
  isNotEmpty: [Function],
  isJust: [Function],
  isNothing: [Function],
  isMaybe: [Function],
  isRight: [Function],
  isLeft: [Function],
  isEither: [Function],
  isMonad: [Function],
  isSome: [Function]
}

```

## Maybe monad methods

Bind will return a Nothing instance if the Mappable produces a nil result or throws.

``` javascript
const m = l.maybe(5)

m.bind:          chain value with unary function
m.effect         execute side-effect on value
m.filter         when predicate fails on value, return Nothing, else this
m.getValue
m.getValueOr     default value for Nothing
m.isJust
m.isMaybe
m.isMonad
m.isNothing
m.match          monadic branching {just: value => result, nothing: () => result}
m.toEither
m.toString

```

## Either monad methods

Almost identical to the Maybe monad

``` javascript
const e = l.either(5)

e.bind:          chain value with unary function
e.effect         execute side-effect on value
e.filter         when predicate fails on value, return Left, else this
e.getReason      get reason why Either turned to Left branch
e.getValue
e.getValueOr     default value for Left
e.isEither
e.isLeft
e.isMonad
e.isRight
e.match          monadic branching {right: value => result, left: () => result}
e.toMaybe
e.toString

```

# Plans for the future

- add missing functionality
- clean up typing
- add type overloads
- implement currying

Comments/PRs welcome
