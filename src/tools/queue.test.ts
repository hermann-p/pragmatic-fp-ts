import Q from "./Queue";
import * as l from "../main";

describe("queue", () => {
  it("should create a new queue", () => {
    const q = new Q([1, 2, 3]);
    expect(q.length).toBe(3);
  });

  it("should map like an array", () => {
    const q = new Q([1, 2, 3]);
    expect(q.map(l.inc)).toEqual([2, 3, 4]);
  });

  it("should fail when popping from empty queue", () => {
    expect(() => {
      new Q().pop();
    }).toThrow();
  });

  it("should return undefined when peeking into empty queue", () => {
    expect(new Q().peek()).not.toBeDefined();
  });

  describe("q.pop() from new Q([1, 2, 3])", () => {
    const q = new Q([1, 2, 3]);
    it.each`
      el   | len
      ${1} | ${2}
      ${2} | ${1}
      ${3} | ${0}
    `(`Should return $el and have $len items left`, ({ el, len }) => {
      expect(q.peek()).toBe(el);
      const hd = q.pop();
      expect(hd).toBe(el);
      expect(q.length).toBe(len);
    });
  });

  describe("q.push() into new Q()", () => {
    const q = new Q();
    it.each`
      el     | len
      ${"a"} | ${1}
      ${"b"} | ${2}
      ${"c"} | ${3}
      ${"d"} | ${4}
    `(`Should have a length of $len after pushing $el`, ({ el, len }) => {
      q.push(el);
      expect(q.length).toBe(len);
    });
  });

  describe("isEmpty()", () => {
    it("should work as expected", () => {
      const q = new Q();
      expect(q.isEmpty()).toBe(true);
      expect(q.push("foo").isEmpty()).toBe(false);
      q.pop();
      expect(q.isEmpty()).toBe(true);
    });
  });
});
