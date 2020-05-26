export function repeat<A>(value: A, repetitions: number): A[];
export function repeat<A>(value: A): (repetitions: number) => A[];

export function repeat<A>(value: A, repetitions?: number) {
  if (arguments.length === 1) {
    return (r: number) => repeat(value, r);
  }

  return new Array(repetitions).fill(value);
}
