import { getValue, getValueOr } from "./main.ts";

export function concat<A>(head: A[], tail: A[]): A[];
export function concat<A>(head: A[]): (tail: A[]) => A[];
export function concat(tail: string, head: string): string;
export function concat(tail: string): (head: string) => string;

export function concat(head: unknown, tail?: unknown) {
  if (arguments.length === 1) {
    return (_tail: any) => concat(head as any, _tail as any) as any;
  }

  const _head = getValue(head);
  const _tail = getValue(tail);

  if (_tail instanceof Array || _head instanceof Array) {
    const theHead = (_head ?? []) as unknown[];
    const theTail = (_tail ?? []) as unknown[];

    const result = new Array(theHead.length + theTail.length);
    for (let i = 0; i < theHead.length; ++i) result[i] = theHead[i];
    for (let i = theHead.length, j = 0; j < theTail.length; ++i, ++j)
      result[i] = theTail[j];

    return result;
  } else {
    return (getValueOr("", head) as string) + (getValueOr("", tail) as string);
  }
}
