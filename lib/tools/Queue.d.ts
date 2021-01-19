export default class Queue<T> {
    private head?;
    private tail?;
    length: number;
    constructor(elems?: T[]);
    push: (el: T) => this;
    pop: () => T;
    peek: () => T | undefined;
    isEmpty: () => boolean;
    static from<T>(elems: T[]): Queue<T>;
    map: <B>(fn: (el: T) => B) => B[];
    forEach: (fx: (el: T) => any) => void;
}
