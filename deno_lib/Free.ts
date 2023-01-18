import { Mappable } from "./types.ts";

export class Free<T> {
  private val: T = undefined as any;
  static of = <A>(val: A) => {
    const m = new Free<A>();
    m.val = val;
    return m;
  };

  _ = <U>(f: Mappable<T, U>) => Free.of(f(this.val));
}
