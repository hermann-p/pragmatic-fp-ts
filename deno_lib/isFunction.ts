export function isFunction<F extends (...args: any[]) => any>(f: F | any): f is F {
  return typeof f === "function";
}
