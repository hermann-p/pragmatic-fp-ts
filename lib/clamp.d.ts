declare type Sortable = string | number | Date;
export declare function clamp<A extends Sortable = number>(min: A, max: A, value: A): A;
export declare function clamp<A extends Sortable = number>(min: A, max: A): <B = A extends number ? number : A extends string ? string : Date>(value: B) => B;
export declare function clamp<A extends Sortable = number>(min: A): <B = A extends number ? number : A extends string ? string : Date>(max: B) => <C = A extends number ? number : A extends string ? string : Date>(value: C) => C;
export {};
