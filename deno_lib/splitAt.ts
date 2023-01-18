import { isNil } from "./main.ts";

export function splitAt<A>(idx: number, coll: A[]): [A[], A[]];
export function splitAt(
  idx: number
): <A extends any | string>(coll: A[] | A) => A extends string ? [string, string] : [A[], A[]];

export function splitAt(idx: number, text: string): [string, string];
export function splitAt(idx: number): (text: string) => [string, string];

export function splitAt(idx: number, input?: any[] | string) {
  if (arguments.length === 1) return (_input: any | string) => splitAt(idx, _input) as any;

  if (typeof input !== "string" && !(input instanceof Array) && !isNil(input)) {
    throw new Error("Can only split string or array, got " + typeof input);
  }

  return typeof input === "string"
    ? [input.slice(0, idx) || "", input.slice(idx) || ""]
    : [(input || []).slice(0, idx), (input || []).slice(idx)];
}
