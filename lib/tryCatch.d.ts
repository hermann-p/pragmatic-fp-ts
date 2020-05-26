import { Mappable } from "./main";
declare type Catcher<A, B> = ((err: Error, value: A) => B) | ((err: Error) => B);
export declare function tryCatch<A, B>(tryer: Mappable<A, B>, catcher: Catcher<A, B>, value: A): B;
export declare function tryCatch<A, B>(tryer: Mappable<A, B>, catcher: Catcher<A, B>): (value: A) => B;
export declare function tryCatch<A, B>(tryer: Mappable<A, B>): (catcher: Catcher<A, B>) => (value: A) => B;
export {};
