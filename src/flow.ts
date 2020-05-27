type Lookup<T, K extends keyof any, Else = never> = K extends keyof T ? T[K] : Else;
type Tail<T extends any[]> = ((...t: T) => void) extends (x: any, ...u: infer U) => void
  ? U
  : never;
type Func1 = (arg: any) => any;
type ArgType<F, Else = never> = F extends (arg: infer A) => any ? A : Else;
type AsChain<F extends [Func1, ...Func1[]], G extends Func1[] = Tail<F>> = {
  [K in keyof F]: (arg: ArgType<F[K]>) => ArgType<Lookup<G, K, any>, any>;
};
type LastIndexOf<T extends any[]> = ((...x: T) => void) extends (y: any, ...z: infer U) => void
  ? U["length"]
  : never;
export function flow<F extends [(arg: any) => any, ...Array<(arg: any) => any>]>(
  ...f: F & AsChain<F>
): (arg: ArgType<F[0]>) => ReturnType<F[LastIndexOf<F>]>;

/**
 * Composes an arbitrary number of functions into a new function, the
 * result being a function piping their results as argument into the
 * next function, with data flow from left to right. The first
 * function may be n-ary while all others must be unary
 *
 * Note: Generic function types cannot be inferred, resulting in a
 * TypeScript error. Successive (any) -> any functions might break
 * type inference.
 *
 * (((A1, B, C,...)  -> A2) -> (A2 -> A3) ... -> (An-1 -> An)) -> (A1, B, C,...) -> An
 */

export function flow(...fns: any) {
  return (startValue: any) => fns.reduce((val: any, fn: any) => fn(val), startValue);
}
