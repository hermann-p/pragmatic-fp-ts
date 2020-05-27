import { Mappable } from "./types";

class Pipe<A, B> extends Function {
  readonly fn: Mappable<A, B>;

  constructor(fn: Mappable<A, B>) {
    super();
    this.fn = fn;
    const pipe = function (x: A) {
      return fn(x);
    };
    (pipe as any)._ = <C>(nextFn: Mappable<B, C>) => new Pipe((x: A) => nextFn(fn(x)));
    return pipe as any;
  }

  _<C>(nextFn: Mappable<B, C>) {
    return new Pipe((x: A) => nextFn(this.fn(x)));
  }
}

export const pipe = <A, B>(fn: Mappable<A, B>) => new Pipe(fn);
