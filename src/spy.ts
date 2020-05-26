export function spy<A>(message: string, value: A): A;
export function spy(message: string): <A>(value: A) => A;

export function spy<A>(message: string, value?: A) {
  if (arguments.length === 1) return (theValue: A) => spy(message, theValue);

  console.log(`[${message || "spy"}]:`, typeof value, value);
  return value;
}
