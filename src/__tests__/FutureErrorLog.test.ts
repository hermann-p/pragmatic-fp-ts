import { errorLogged, errorLoggedFuture } from "../ErrorLog";

describe("errorLogged()", () => {
  const divideBy = (y: number) => (x: number) => {
    if (y === 0) throw new Error("Can't divide by zero");
    else return x / y;
  };

  it("should get expected results", () => {
    const el = errorLogged(0)
      ._((x) => x + 2)
      .try(divideBy(2), NaN);

    expect(el.getValue()).toBe(1);
    expect(el.getValueOr(2)).toBe(1);
    expect(el.hasErrors()).toBe(false);
    expect(el.getErrors()).toEqual([]);
  });

  it("should collect error values", () => {
    const el = errorLogged(0)
      ._((x) => x + 2)
      .try(divideBy(0), NaN);

    expect(el.getValue()).toBe(NaN);
    expect(el.getValueOr(1)).toBe(1);
    expect(el.hasErrors()).toBe(true);
    expect(el.getErrors()).toHaveLength(1);
  });

  it("should still reject when not tried", () => {
    const el = errorLogged(0);
    expect(() => el._(divideBy(0))).toThrow();
  });
});

describe("errorLoggedFuture()", () => {
  const divideBy = (y: number) => (x: number) =>
    y === 0 ? Promise.reject("Can't divide by zero") : Promise.resolve(x / y);

  it("should get expected results", async () => {
    const fel = errorLoggedFuture(0)
      ._((x) => x + 2)
      .try(divideBy(2), NaN);

    await expect(fel.getValue()).resolves.toBe(1);
    await expect(fel.getValueOr(2)).resolves.toBe(1);
    await expect(fel.hasErrors()).resolves.toBe(false);
    await expect(fel.getErrors()).resolves.toEqual([]);
  });

  it("should collect error values", async () => {
    const fel = errorLoggedFuture(0)
      ._((x) => x + 2)
      .try(divideBy(0), NaN);

    await expect(fel.getValue()).resolves.toBe(NaN);
    await expect(fel.getValueOr(1)).resolves.toBe(1);
    await expect(fel.hasErrors()).resolves.toBe(true);
    await expect(fel.getErrors()).resolves.toHaveLength(1);
  });

  it("should still reject when not tried", async () => {
    const fel = errorLoggedFuture(0)
      ._((x) => x + 2)
      ._(divideBy(0));

    await expect(fel.getValue()).rejects.toBeDefined();
    await expect(fel.getValueOr(1)).rejects.toBeDefined();
    await expect(fel.hasErrors()).resolves.toBe(false);
    await expect(fel.getErrors()).resolves.toEqual([]);
  });
});
