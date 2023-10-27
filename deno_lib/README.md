# pragmatic-fp-ts

A library for functional programming in TypeScript. Curried,
argument-last, pure, total functions that never mutate any data,
Maybe/Either/Chain monads, FutureEither/FutureMaybe monad-likes.

> <cite>There's not enough JavaScript libraries to choose from.</cite>
> -- no one, never

This is a quick implementation of most of the FP tools I need in may
daily work. Typings are kept as as simple as possible, although this
may include some dirty castings under the hood. Still, it is quite
shiny when seen from the outside.

# How to get

It's on npmjs.com, so you should know the drill.

- npm: `npm install --save pragmatic-fp-ts`
- yarn: `yarn add pragmatic-fp-ts`

Alternatively, include it in your webpage via ~jsdelivr~:

```html
<script src="https://cdn.jsdelivr.net/npm/pragmatic-fp-ts@1/dist/pragmatic-fp-ts.min.js"></script>
```

## Deno

Alternate source format created automatically with
[Denoify](https://github.com/garronej/denoify).

`import * as f from "https://github.com/hermann-p/pragmatic-fp-ts/raw/master/deno_lib/main.ts"`

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
- improve typing even more once TS implements variadic types
- implement some more helpful functions found e.g. in lodash or
  Clojure
- greater use of transducers
- introduce lazyness, gradually change from type-overload hell to abstractions

# History

## 1.10

Type-generating Validator returning `Either` monads with detailed, extensive
parsing error messages on failure.

## 1.5

### Transducers

Although typing them is a bit of a PITA, transducers are a valuable addition for
performance aware functional programmers. The first transducers implemented are:

- map
- filter
- drop
- take
- flatMap
- flatten

which behave just like their non-transducing counterparts, as well as
`transformList` which wraps the step of composing and applying a list of
transducers over arrays.

### Mutables

Mutables are for those situations where a clean functional solution is
inconvenient to implement. They wrap a value and expose methods to mutate that
value as well as a value accessor. After soon as the value is accessed for the
first time, subsequent calls to the mutating functions will raise an Exception
so we can still consume all the data safely.

### Misc

Some minor bugfixes, extended functionality of `keys` and `values`, some
improved typings, most notably for the `update` function.

## 1.4

Add `cycle` to create infinite sequence and a naive dummy infinite array type.

## 1.3.5

Figured out how to setup webpack to create a browser bundle.

## 1.3.4

Removed `mori` dependency. The runtime library is now completely self-contained.
As a Clojure guy I relied on some of mori's functionality for the heavy lifting
of deep get/set/update/equal operations.  
Sadly, to use mori's high performance algorithms, data had to be cast to mori
data and back to JS-data after finishing, crippling performance within large
data sets, so these functions are now completely re-implemented in "plain
TypeScript" with a recursive, queue-based approach to path-getting.  
Deep equality implementation is based on
[epoberezkin/fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal)

## 1.3

Added quick intersection testing functions.

## 1.2

Implemented monadic Futures.

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

# License

MIT
