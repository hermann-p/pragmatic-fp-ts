export function isNil(value: unknown): value is null {
  return (
    value === null ||
    value === undefined ||
    (typeof value === "number" && isNaN(value))
  );
}

export function isNotNil<T>(value?: T): value is NonNullable<T> {
  return !isNil(value);
}
