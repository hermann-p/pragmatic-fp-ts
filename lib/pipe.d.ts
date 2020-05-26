declare type Lookup<T, K extends keyof any, Else = never> = K extends keyof T ? T[K] : Else;
declare type Tail<T extends any[]> = ((...t: T) => void) extends (x: any, ...u: infer U) => void ? U : never;
declare type Func1 = (arg: any) => any;
declare type ArgType<F, Else = never> = F extends (arg: infer A) => any ? A : Else;
declare type AsChain<F extends [Func1, ...Func1[]], G extends Func1[] = Tail<F>> = {
    [K in keyof F]: (arg: ArgType<F[K]>) => ArgType<Lookup<G, K, any>, any>;
};
declare type LastIndexOf<T extends any[]> = ((...x: T) => void) extends (y: any, ...z: infer U) => void ? U["length"] : never;
export declare function pipe<F extends [(arg: any) => any, ...Array<(arg: any) => any>]>(...f: F & AsChain<F>): (arg: ArgType<F[0]>) => ReturnType<F[LastIndexOf<F>]>;
export {};
