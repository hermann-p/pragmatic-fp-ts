import { Effect, Monad } from "./main";
export declare function tap<A, M extends Monad<A>>(effect: Effect<A>, value: Monad<A>): M;
export declare function tap<A, M extends Monad<A>>(effect: Effect<A>): (value: A) => M;
export declare function tap<A>(effect: Effect<A>, value: A): A;
export declare function tap<A>(effect: Effect<A>): (value: A) => A;
