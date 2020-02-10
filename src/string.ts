import { MaybeType, Predicate } from "./types";
import { maybe, nothing } from "./Maybe";

type ReplacementFunction = (substring: string, ...args: any[]) => string;
export const replace = (pattern: string | RegExp) => (
  replacement: string | ReplacementFunction
) => (value: MaybeType<string>) =>
  maybe(value).bind((str) => str.replace(pattern, replacement as any));

export const test = (regex: RegExp): Predicate<string> => (str: string) =>
  typeof str === "string" && regex instanceof RegExp && regex.test(str);
export const matches = test;

export const toUpper = (str: MaybeType<string>) => maybe(str).bind((s) => s.toUpperCase());
export const toLower = (str: MaybeType<string>) => maybe(str).bind((s) => s.toLowerCase());

export const split = (delimiter: MaybeType<string>) => (stringToSplit: MaybeType<string>) => {
  const delim = maybe(delimiter);
  return delim.isNothing()
    ? nothing()
    : maybe(stringToSplit).bind((str) => str.split(delim.getValue()));
};
