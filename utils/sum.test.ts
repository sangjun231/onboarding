import { sum } from "./sum";

test("1 + 2는 3이 되어야 한다.", () => {
  expect(sum(1, 2)).toBe(3);
});

test("3 + 5는 8이 되어야 한다.", () => {
  expect(sum(3, 5)).toBe(8);
});
