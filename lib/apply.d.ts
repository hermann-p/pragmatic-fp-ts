export declare function apply<F extends (...args: any[]) => any>(fn: F, args: Parameters<F>): ReturnType<F>;
export declare function apply<F extends (...args: any[]) => any>(fn: F): <B = Parameters<F>>(args: B) => ReturnType<F>;
