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

# How to get

It's on npmjs.com, so you should know the drill.

- npm: `npm install --save pragmatic-fp-ts`
- yarn: `yarn add pragmatic-fp-ts`
- Currently no single .min.js for easy import via browser tags
  exists. This is because webpack and I dislike each other. I tried
  using the parcel bundler, but the resulting bundle file size
  exploded while at the same time the .d.ts files disappeared. Anyone
  bothers to help?

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
  writing, flavours of `merge` are the most noteworthy, although a
  `pipe` function exists)
- very little function names differ
- `innerJoin` behaves more like one would expect from an inner
  database join
- `compose` and `pipe` use monadic-style infix composition instead of
  just accepting arguments. This allows for type-checked composition
  of an arbitrary number of functions in contrast to ramda's "list
  overloads" approach
- return types look much cleaner and are arguably more readable by
  avoiding constructs like `Curry4<Map<Filter<...` and being more like
  `<A,B>(value: A) => B[]`
- no support for fantasy-land objects

# Plans for the future

- auto-infer even more types (although it's already quite good)
- add Futures
- improve typing even more once TS implements variadic types
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

# History

## 1.1

- Deprecated the function name `bind` of monads, calling it `_`
  instead. Although functional programmers should not have run into
  any problems with it, the name `bind` might confuse people coming
  from object oriented JavaScript programming, expecting
  function-this-argument-binding instead of monadic binding. The old
  name is still kept to keep older code from breaking too
  much. Composition is arguably easier to read this way.
- Introduced `flow`, `pipe`, and `compose`, so now we should now be
  able to do anything with this lib we can do with ramda.
- Still missing `mergeXXX`, as I still need to find performant ways to
  do so. I have a history with lodash's `merge` crippling one of my
  web apps' performance, and don't want anyone to run into similar
  issues, especially myself :D

## 1.0

- ~100 new functions
- some concept changes, see breaking changes

# Collaboration

- If you miss any FP construct, feel free to open an issue or PR.
  It's probably missing because I forgot to implement it/didn't need
  it yet. If it makes sense to me to have it here, I'll implement it.
- Comments/PRs are very welcome, especially if you want to improve the docs.
