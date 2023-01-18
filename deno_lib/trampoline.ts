const $thunk = Symbol.for("THUNK");

type Fn<T = any> = (...args: any[]) => T;

const eager = <F extends Fn>(f: F) =>
  ((...args: Parameters<F>) => {
    let g: any = f(...args);
    while (g && g[$thunk]) {
      g = g();
    }
    return g;
  }) as F;

const lazy = <T, F extends Fn<T> = Fn<T>>(f: F) =>
  ((...args: Parameters<F>) => {
    const thunk = () => f(...args);
    (thunk as any)[$thunk] = true;
    return thunk as any;
  }) as F;

export { eager, lazy };
