import { innerJoin } from "../main.ts";

describe("innerJoin", () => {
  it("joins as expected", () => {
    const expected = [
      { id: 456, name: "Stephen Stills", country: "USA" },
      { id: 177, name: "Neil Young", country: "Canada" },
    ];
    expect(
      innerJoin(
        (record, query) => record.id === query.id,
        [
          { id: 824, name: "Richie Furay" },
          { id: 956, name: "Dewey Martin" },
          { id: 313, name: "Bruce Palmer" },
          { id: 456, name: "Stephen Stills" },
          { id: 177, name: "Neil Young" },
        ],
        [
          { id: 177, country: "Canada" },
          { id: 456, country: "USA" },
          { id: 999, country: "unknown" },
        ]
      )
    ).toEqual(expected);
  });
});
