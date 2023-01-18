import { Mappable } from "./main.ts";

type Catcher<A, B> = ((err: Error, value: A) => B) | ((err: Error) => B);

export function tryCatch<A, B>(
  tryer: Mappable<A, B>,
  catcher: Catcher<A, B>,
  value: A
): B;

export function tryCatch<A, B>(
  tryer: Mappable<A, B>,
  catcher: Catcher<A, B>
): (value: A) => B;

export function tryCatch<A, B>(
  tryer: Mappable<A, B>
): (catcher: Catcher<A, B>) => (value: A) => B;

export function tryCatch<A, B>(
  tryer: Mappable<A, B>,
  catcher?: Catcher<A, B>,
  value?: A
) {
  if (arguments.length === 1) {
    return function (c: Catcher<A, B>, v?: A) {
      return arguments.length === 1
        ? tryCatch(tryer, c)
        : tryCatch(tryer, c, v!);
    };
  } else if (arguments.length === 2) {
    return (v: A) => tryCatch(tryer, catcher!, v);
  }

  try {
    return tryer(value!);
  } catch (err) {
    return catcher!(err, value!);
  }
}
