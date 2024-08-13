const hIndex = require("./h_index");

test("h index", () => {
  expect(hIndex([3, 0, 6, 1, 5])).toBe(3);
  expect(hIndex([1, 3, 1])).toBe(1);
});
