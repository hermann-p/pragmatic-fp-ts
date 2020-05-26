// Always returns the given value

export function constantly<T>(value: T) {
  return (..._: any[]) => value;
}
