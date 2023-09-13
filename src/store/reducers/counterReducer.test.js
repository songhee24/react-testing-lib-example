import counterReducer, { increment } from "./counterReducer";

describe("getCounterValue", () => {
  test("should handle initial state", () => {
    expect(counterReducer(undefined, {})).toEqual({ value: 0 });
  });
  test("increment", () => {
    expect(counterReducer({ value: 0 }, increment())).toEqual({ value: 1 });
  });
  test("decrement", () => {});
  test("with empty state", () => {});
});
