const removeDpFromSorted2 = require("./remove_dp_from_sorted_array_2");

test("remove duplicates from sorted array", () => {
  expect(removeDpFromSorted2([1, 1, 1, 2, 2, 3])).toBe(5);
  expect(removeDpFromSorted2([0, 0, 1, 1, 1, 1, 2, 3, 3])).toBe(7);
});
