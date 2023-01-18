import { getValue } from "./main.ts";

type MNum = number;

const getValueOr = (alt: number, v: MNum) => {
  const vv = getValue(v);
  return vv === 0 ? vv : vv || alt;
};

export function range(start: MNum, end: MNum): number[];
export function range(start: MNum): (end: MNum) => number[];

export function range(start: MNum, end?: MNum) {
  if (arguments.length === 1) {
    return (_end: MNum) => range(start, _end);
  }

  const s = getValueOr(0, start);
  const e = getValueOr(s, end!);

  const descend = e < s;
  const step = descend ? -1 : 1;

  const result: number[] = [];

  for (let i = s; i !== e; i += step) {
    result.push(i);
  }

  return result;
}
