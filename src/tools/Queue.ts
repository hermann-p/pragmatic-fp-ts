class Item<T> {
  data: T;
  next: Item<T> | undefined;
  constructor(el: T, next?: Item<T>) {
    this.data = el;
    this.next = next;
  }
}

export default class Queue<T> {
  private head?: Item<T>;
  private tail?: Item<T>;
  length = 0;
  constructor(elems?: T[]) {
    if (elems) {
      elems.forEach((el) => this.push(el));
    }
  }

  push = (el: T) => {
    if (!this.tail) {
      this.tail = new Item<T>(el);
      this.head = this.tail;
    } else {
      this.tail.next = new Item<T>(el);
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  };

  pop = () => {
    if (!this.head) {
      throw new Error("Cannot pop from empty queue");
    } else {
      const elem = this.head;
      this.head = this.head?.next ? this.head!.next : undefined;
      this.length--;
      return elem!.data;
    }
  };

  peek = () => {
    return this.head?.data;
  };

  isEmpty = () => {
    return this.length <= 0;
  };

  static from<T>(elems: T[]) {
    return new Queue(elems);
  }

  map = <B>(fn: (el: T) => B) => {
    const result: B[] = [];
    for (let p = this.head; !!p; p = p.next) {
      result.push(fn(p.data));
    }
    return result;
  };

  forEach = (fx: (el: T) => any) => {
    for (let p = this.head; !!p; p = p.next) {
      fx(p.data);
    }
  };
}
