import { Mappable } from "./types.ts";

interface PipeFunction<A, B> {
  (input: A): B;
  _<C>(nextFn: Mappable<B, C>): PipeFunction<A, C>;
}

class PipeFunction<A, B> extends Function {
  readonly fn: Mappable<A, B>;

  constructor(fn: Mappable<A, B>) {
    super();
    this.fn = fn;
    const pipe = function (x: A) {
      return fn(x);
    };
    (pipe as any)._ = <C>(nextFn: Mappable<B, C>) => new PipeFunction((x: A) => nextFn(fn(x)));
    return pipe as any;
  }
}

export const pipe = <A, B>(fn: Mappable<A, B>) => new PipeFunction(fn);
