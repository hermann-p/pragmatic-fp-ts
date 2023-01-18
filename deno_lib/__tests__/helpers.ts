import * as l from "../main.ts";

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-+=?";

export const getRandomChar = () => {
  const i = (Math.random() * alphabet.length) | 0;
  return alphabet[i];
};

export const mkRandomString = (len = 12) =>
  l
    .range(0, len)
    .map(() => getRandomChar())
    .join("");

const genKeys = (keys: number | string[]) =>
  typeof keys === "number" ? l.range(0, keys).map(() => mkRandomString()) : keys;

export const mkDataObject = (keys: number | string[], strLen = 12) => {
  const keyNames = genKeys(keys);
  const obj = {} as { [key: string]: string };
  keyNames.forEach((key) => (obj[key] = mkRandomString(strLen)));
  return obj;
};

export const mkDataList = (items: number, keys: number | string[] = 10, strLen = 12) => {
  const keyNames = genKeys(keys);
  return l.range(0, items).map(() => mkDataObject(keyNames, strLen));
};

describe("test data helpers", () => {
  const expectRandomString = (str: string, len?: number) => {
    expect(typeof str).toEqual("string");
    if (len) {
      expect(str.length).toBe(len);
    }
  };

  const expectDataObject = (obj: any) => {
    const keys = Object.keys(obj);
    expect(keys instanceof Array).toBe(true);
    expect(keys.length).toBeGreaterThan(0);
    keys.forEach((k) => expectRandomString(obj[k]));
  };

  describe("mkRandomString()", () => {
    it("should generate random strings", () => {
      expectRandomString(mkRandomString());
      expectRandomString(mkRandomString(7));
    });
    it("should generate random strings of given length", () => {
      expectRandomString(mkRandomString(7), 7);
      expectRandomString(mkRandomString(1), 1);
      expectRandomString(mkRandomString(), 12);
    });
  });

  describe("mkDataObject()", () => {
    it("should generate data objects", () => {
      expectDataObject(mkDataObject(5));
      expectDataObject(mkDataObject(["foo", "bar"], 18));
    });
  });

  describe("mkDataList()", () => {
    const list = mkDataList(5, 6, 17);
    list.forEach(expectDataObject);
  });
});
