import { sortWith } from "../sortWith.ts";
import { prop } from "../prop.ts";

describe("sortWith()", () => {
  const input = [
    { foo: 1, bar: 4 },
    { foo: 2, bar: 3 },
    { foo: 1, bar: 3 },
  ];
  it("should sort with single key 'foo'", () => {
    const sorted = sortWith([prop("foo")])(input);
    expect(sorted).toEqual([input[0], input[2], input[1]]);
  });
  it("should sort with single key 'bar'", () => {
    const sorted = sortWith([prop("bar")])(input);
    expect(sorted).toEqual([input[1], input[2], input[0]]);
  });
  it("should sort with 'foo' first, then 'bar'", () => {
    const sorted = sortWith([prop("foo"), prop("bar")], input);
    expect(sorted).toEqual([input[2], input[0], input[1]]);
  });
  it("should sort with 'bar' first, then 'foo'", () => {
    const sorted = sortWith([prop("bar"), prop("foo")], input);
    console.log(JSON.stringify(sorted));
    expect(sorted).toEqual([input[2], input[1], input[0]]);
  });
});
