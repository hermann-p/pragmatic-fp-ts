export function forkJoin<A, B, C, D>(
  join: (b: B, c: C) => D,
  f: (x: A) => B,
  g: (x: A) => C,
  x: A
): D;

export function forkJoin<A, B, C, D>(
  join: (b: B, c: C) => D,
  f: (x: A) => B,
  g: (x: A) => C
): (x: A) => D;

export function forkJoin<A, B, C, D>(
  join: (b: B, c: C) => D,
  f: (x: A) => B
): (g: (x: A) => C) => (x: A) => D;

export function forkJoin<B, C, D>(
  join: (b: B, c: C) => D
): <A>(f: (x: A) => B) => (g: (x: A) => C) => (x: A) => D;

export function forkJoin(join: any, f?: any, g?: any, x?: any) {
  if (arguments.length === 1) return (f_: any) => forkJoin(join, f_);
  else if (arguments.length === 2) return (g_: any) => forkJoin(join, f!, g_);
  else if (arguments.length === 3) return (x_: any) => forkJoin(join, f!, g!, x_);

  return join(f!(x), g!(x));
}
