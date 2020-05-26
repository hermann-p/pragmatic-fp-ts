[pragmatic-fp-ts](README.md) › [Globals](globals.md)

# pragmatic-fp-ts

# pragmatic-fp-ts

A library for functional programming in TypeScript. Curried,
argument-last, pure, total functions that never mutate any data,
Maybe/Either/Chain monads.

> There's not enough JavaScript libraries to choose from.
> -- <cite>no one, never</cite>

This is a quick implementation of most of the FP tools I need in may
daily work. Typings are kept as as simple as possible, although this
may include some dirty castings under the hood. Still, it is quite
shiny when seen from the outside.

# Breaking changes

## 1.0

- functions no longer return Maybe monads as default
- some function names changed
- `Maybe.match` and `Either.match` no longer automatically catch
  errors, so they can be used as to throw when absolutely needed
  without leaving the monads' flow.
- monads support transforming themselves when given a monad
  constructor

# Usability primer

An elaborated readme will follow. Until then, you can see the
[auto generated docs on github](https://github.com/hermann-p/pragmatic-fp-ts/blob/master/docs/globals.md).

## Differences to ramda

- written in TS from the beginning with emphasis on inferring types
  over just being `any`
- a very small set of functions is not implemented (at the time of
  writing, merge, pipe and compose are the most noteworthy)
- very little function names differ
- `innerJoin` behaves more like one would expect from an inner
  database join
- return types look much cleaner and are arguably more readable by
  avoiding constructs like `Curry4<Map<Filter<...` and being more like
  `<A,B>(value: A) => B[]`

# Plans for the future

- auto-infer even more types (although it's already quite good)
- add Futures
- improve typing once TS implements variadic types
- implement some more helpful functions found e.g. in lodash or
  Clojure

# FAQ

## What about MaybeAsync/EitherAsync?

Not implemented yet, I'm sorry. Wanna make a PR? Until then, my suggested workaround:

``` javascript
// have some Promise returning a Maybe:
const fnWithMaybe = () => Promise.resolve(Maybe("value"))

// inside an async fn
(await fnWithMaybe())
  .bind(doStuff)
  .filter(condition)
  .getValue() // or whatever

// or outside async fn
fnWithMaybe()
  .then(optional =>
    optional
      .bind(...)
      .filter(...)
      .getValue()
  )

// have some Promise returning a value:
const fn = () => Promise.resolve("value")

// inside async fn
maybe(await fn())
  .bind(doStuff)
  .filter(condition)
  .getValue() // ...

// outside async fn
fn()
  .then(value =>
    maybe(value)
      .bind(...)
  ) // etc
```

# Collaboration

- If you miss any FP construct, feel free to open an issue or PR.
  It's probably missing because I forgot to implement it/didn't need
  it yet. If it makes sense to me to have it here, I'll implement it.
- Comments/PRs are very welcome, especially if you want to improve the docs.
