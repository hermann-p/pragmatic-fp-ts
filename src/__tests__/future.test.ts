import * as l from "../main";

const even = (n: number) => n % 2 === 0;
const odd = (n: number) => n % 2 === 1;
const asyncEven = (n: number) => Promise.resolve(n % 2 === 0);
const asyncOdd = (n: number) => Promise.resolve(n % 2 === 1);

describe("Future", () => {
  describe("eitherFuture", () => {
    it("should lift values", async () => {
      const num = l.futureEither(1);
      expect(await num.getValue()).toBe(1);
    });

    it("should lift promises", async () => {
      const num = l.futureEither(Promise.resolve(1));
      expect(await num.getValue()).toBe(1);
    });

    it("should chain bind functions", async () => {
      const num = l.futureEither(1)._(l.add(1));
      expect(await num.getValue()).toBe(2);
    });

    it("should chain bind promise generating functions", async () => {
      const incAsync = (n: number) => Promise.resolve(n + 1);
      const num = l.futureEither(1)._(incAsync);
      expect(await num.getValue()).toBe(2);
    });

    it("should filter values with predicates", async () => {
      const num = l.futureEither(1);
      expect(await num.filter(odd).getMonad()).toBeInstanceOf(l.Right);
      expect(await num.filter(even).getMonad()).toBeInstanceOf(l.Left);
      expect(await num.filter(even).getMonad()).toBeInstanceOf(l.Left);
    });

    it("should filter values with predicate promises", async () => {
      const num = l.futureEither(1);
      expect(await num.filter(asyncOdd).getMonad()).toBeInstanceOf(l.Right);
      expect(await num.filter(asyncEven).getMonad()).toBeInstanceOf(l.Left);
      expect(
        await num
          .filter(asyncEven)
          ._(l.add(1))
          .getMonad()
      ).toBeInstanceOf(l.Left);
    });

    it("should bind effect", async () => {
      let value = 1;
      const num = l.futureEither("foo");
      const updateValue = () => (value += 1);
      expect(await num.effect(updateValue).getValue()).toEqual("foo");
      expect(value).toBe(2);
    });

    it("should bind async effects", async () => {
      let value = 1;
      const num = l.futureEither("foo");
      let p: Promise<any> = null as any;
      const updateAsync = () => {
        p = new Promise((resolve) => {
          setTimeout(() => {
            value += 1;
            resolve();
          }, 500);
        });
        return p;
      };
      expect(await num.effect(updateAsync).getValue()).toEqual("foo");
      expect(value).toBe(1);
      await p; // eslint-disable-line
      expect(value).toBe(2);
    });

    it("should catch errors", async () => {
      const num = l.futureEither(1);
      const boom1 = () => Promise.reject("boom") as any;
      const boom2 = () => {
        throw new Error("boom");
      };

      expect(await num._(boom1).getMonad()).toBeInstanceOf(l.Left);
      expect(await num.filter(boom1).getMonad()).toBeInstanceOf(l.Left);
      expect(await num._(boom2).getMonad()).toBeInstanceOf(l.Left);
      expect(await num.filter(boom2).getMonad()).toBeInstanceOf(l.Left);
    });
  });

  describe("maybeFuture", () => {
    it("should lift values", async () => {
      const num = l.futureMaybe(1);
      expect(await num.getValue()).toBe(1);
    });

    it("should lift promises", async () => {
      const num = l.futureMaybe(Promise.resolve(1));
      expect(await num.getValue()).toBe(1);
    });

    it("should chain bind functions", async () => {
      const num = l.futureMaybe(1)._(l.add(1));
      expect(await num.getValue()).toBe(2);
    });

    it("should chain bind promise generating functions", async () => {
      const incAsync = (n: number) => Promise.resolve(n + 1);
      const num = l.futureMaybe(1)._(incAsync);
      expect(await num.getValue()).toBe(2);
    });

    it("should filter values with predicates", async () => {
      const num = l.futureMaybe(1);
      expect(await num.filter(odd).getMonad()).toBeInstanceOf(l.Just);
      expect(await num.filter(even).getMonad()).toBeInstanceOf(l.Nothing);
      expect(
        await num
          .filter(even)
          ._(l.add(1))
          .getMonad()
      ).toBeInstanceOf(l.Nothing);
    });

    it("should filter values with predicate promises", async () => {
      const num = l.futureMaybe(1);
      expect(await num.filter(asyncOdd).getMonad()).toBeInstanceOf(l.Just);
      expect(await num.filter(asyncEven).getMonad()).toBeInstanceOf(l.Nothing);
      expect(
        await num
          .filter(asyncEven)
          ._(l.add(1))
          .getMonad()
      ).toBeInstanceOf(l.Nothing);
    });

    it("should bind effect", async () => {
      let value = 1;
      const num = l.futureMaybe("foo");
      const updateValue = () => (value += 1);
      expect(await num.effect(updateValue).getValue()).toEqual("foo");
      expect(value).toBe(2);
    });

    it("should bind async effects", async () => {
      let value = 1;
      const num = l.futureMaybe("foo");
      let p: Promise<any> = null as any;
      const updateAsync = () => {
        p = new Promise((resolve) => {
          setTimeout(() => {
            value += 1;
            resolve();
          }, 500);
        });
        return p;
      };
      expect(await num.effect(updateAsync).getValue()).toEqual("foo");
      expect(value).toBe(1);
      await p; // eslint-disable-line
      expect(value).toBe(2);
    });

    it("should catch errors", async () => {
      const num = l.futureMaybe(1);
      const boom1 = () => Promise.reject("boom") as any;
      const boom2 = () => {
        throw new Error("boom");
      };

      expect(await num._(boom1).getMonad()).toBeInstanceOf(l.Nothing);
      expect(await num.filter(boom1).getMonad()).toBeInstanceOf(l.Nothing);
      expect(await num._(boom2).getMonad()).toBeInstanceOf(l.Nothing);
      expect(await num.filter(boom2).getMonad()).toBeInstanceOf(l.Nothing);
    });
  });
});
