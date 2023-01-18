import { equals, getValue, isNil } from "./main.ts";

export function endsWith(tail: string, seq: string): boolean;
export function endsWith<A>(tail: A | A[], seq: A[]): boolean;
export function endsWith(tail: string): (seq: string) => boolean;
export function endsWith<A>(tail: A | A[]): (seq: A[]) => boolean;

export function endsWith(tail: any, seq?: any) {
  if (arguments.length === 1) {
    return (theSeq: any) => endsWith(tail, theSeq as any);
  }

  const _tail = getValue(tail);
  const _seq = getValue(seq);
  if (isNil(_tail) || isNil(_seq)) return false;

  if (typeof _tail === "string" && typeof _seq === "string") {
    return _seq.endsWith(_tail);
  } else if (_tail instanceof Array && !(_seq[0] instanceof Array)) {
    let j = _seq.length - 1;
    for (let i = _tail.length - 1; i > 0; --i, --j) {
      if (!equals(_tail[i], _seq[j])) return false;
    }
    return true;
  } else {
    return equals(_seq[_seq.length - 1], _tail);
  }
}
