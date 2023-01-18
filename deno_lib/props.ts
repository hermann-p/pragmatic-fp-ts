import { Dictionary } from "./main.ts";

export function props<A = any>(propNames: string[], dict: Dictionary<A>): A;
export function props(propNames: string[]): <A>(dict: Dictionary<A>) => A;

export function props<A = any>(propNames: string[], dict?: Dictionary<A>) {
  if (arguments.length === 1) {
    return (d: Dictionary<A>) => props(propNames, d);
  }

  return propNames.map((propName) => (dict || {})[propName]);
}
