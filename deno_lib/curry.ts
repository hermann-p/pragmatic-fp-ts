/*

type FuncType = (...args: any[]) => any;

type Curry2<F extends (...args: any) => any> = F extends (...args: infer As) => infer B
  ? F | ((a0: As[0]) => (a1: As[1]) => B)
  : never;

const foo: Curry2<(a: string, b: number) => boolean> = null as any;
foo("foo", 1);

type F1 = Curry2<(a: string, b: string) => number>;

function curry<F extends FuncType>(f: F): F extends (...args: infer T) => infer U ? F : never {
  return function curried(...args) {
    return args.length >= f.length ? f(...args) : (...args_) => curried(...args_);
  };
}

*/
