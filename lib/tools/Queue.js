"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor(el, next) {
        this.data = el;
        this.next = next;
    }
}
class Queue {
    constructor(elems) {
        this.length = 0;
        this.push = (el) => {
            if (!this.tail) {
                this.tail = new Item(el);
                this.head = this.tail;
            }
            else {
                this.tail.next = new Item(el);
                this.tail = this.tail.next;
            }
            this.length++;
            return this;
        };
        this.pop = () => {
            var _a;
            if (!this.head) {
                throw new Error("Cannot pop from empty queue");
            }
            else {
                const elem = this.head;
                this.head = ((_a = this.head) === null || _a === void 0 ? void 0 : _a.next) ? this.head.next : undefined;
                this.length--;
                return elem.data;
            }
        };
        this.peek = () => {
            var _a;
            return (_a = this.head) === null || _a === void 0 ? void 0 : _a.data;
        };
        this.isEmpty = () => {
            return this.length <= 0;
        };
        this.map = (fn) => {
            const result = [];
            for (let p = this.head; !!p; p = p.next) {
                result.push(fn(p.data));
            }
            return result;
        };
        this.forEach = (fx) => {
            for (let p = this.head; !!p; p = p.next) {
                fx(p.data);
            }
        };
        if (elems) {
            elems.forEach((el) => this.push(el));
        }
    }
    static from(elems) {
        return new Queue(elems);
    }
}
exports.default = Queue;
