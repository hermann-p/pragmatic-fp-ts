// Applies the given function with the given array of arguments

export function apply<F extends (...args: any[]) => any>(
  fn: F,
  args: Parameters<F>
): ReturnType<F>;

export function apply<F extends (...args: any[]) => any>(
  fn: F
): <B = Parameters<F>>(args: B) => ReturnType<F>;

export function apply<F extends (...args: any[]) => any>(
  fn: F,
  args?: Parameters<F>
) {
  if (arguments.length === 1) {
    return (_args: Parameters<F>) => apply(fn, _args);
  }

  return fn(...(args || []));
}
