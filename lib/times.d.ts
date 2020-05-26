import { Mappable } from "./main";
export declare function times<A>(repeats: number, fn: Mappable<number, A>): A[];
export declare function times(repeats: number): <A>(fn: Mappable<number, A>) => A[];
