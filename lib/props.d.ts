import { Dictionary } from "./main";
export declare function props<A = any>(propNames: string[], dict: Dictionary<A>): A;
export declare function props(propNames: string[]): <A>(dict: Dictionary<A>) => A;
