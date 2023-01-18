import { Endomorphism } from "./main.ts";

type Replace = string | RegExp;
type Replacer = string | Endomorphism<string>;

export function replace(what: Replace, by: Replacer, where: string): string;
export function replace(what: Replace, by: Replacer): (where: string) => string;
export function replace(what: Replace): (by: Replacer) => (where: string) => string;

export function replace(what: Replace, by?: Replacer, where?: string) {
  switch (arguments.length) {
    case 1:
      return function (by_: Replacer, where_?: string) {
        return arguments.length === 1 ? replace(what, by_) : replace(what, by_, where_!);
      };
    case 2:
      return (where_: string) => replace(what, by!, where_);
    default:
      return (where || "").replace(what || "", (by || "") as any);
  }
}
