# pragmatic-fp-ts

A library for functional programming in TypeScript. Curried, total
functions, Maybe/Either monads.

> There's not enough JavaScript libraries to choose from.
> -- <cite>no one, never</cite>

This is a quick implementation of most of the FP tools I need in may
daily work. Typings are kept as as simple as possible, although this
may include some dirty castings under the hood. Still, it is quite
shiny when seen from the outside.

All functions are curried, there is no optional currying. This is
mainly because I develop this lib in my spare time but need it
available at work. As multi-arg functions are meant to be used in
chaining, this should not be too much of a burden (although I agree that using things like `ifElse` in the wild is kind of ugly). I plan on
implementing `ramda`-like flexible currying in the future, but it is
not a top priority and will not break the existing API.

All functions are total and will always return Maybe/Either
types. Exceptions are caught automatically and converted to
Nothing/Left, except when it could be very confusing for a function to
return. Maybe will warn you in the console when it transformed to
Nothing due to an exception, and Either will store any exception in
its Left branch as expected.

# Usability primer

An elaborated readme will follow. Until then, you can see the
(https://github.com/hermann-p/pragmatic-fp-ts/blob/master/docs/globals.md)[auto
generated docs on github].

# Plans for the future

- add more functionality to get on par with ramda (most of the
  functions I use do already exist)
- clean up typing
- add type overloads
- implement currying
- some sort of weak monad transformers
- rely more heavily on `mori` internally, to get more speed out of its
  optimised immutable data structures

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

## The docs do not show how many arguments I need to feed to curried functions!

I know. They are simply auto-generated using `typedoc` and
`typedoc-plugin-markdown` so I can host them on github in a readable format. As said before, I just don't have the time to write a full-on documentation as I got work to do.

The docs do, however, provide you with links to the respective lines in the source files, so you can just click them and see the signatures yourself. If you have any FP background, nothing should surprise you.

# Collaboration

- If you miss any FP construct, feel free to let me know.  
  It's probably missing because I forgot to implement it/didn't need
  it yet. If it makes sense to me to have it here, I'll implement it.
- Comments/PRs are very welcome, especially if you want to improve the docs.
