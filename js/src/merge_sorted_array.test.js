const mergeSortedArray = require("./merge_sorted_array");

test("merged array", () => {
  expect(mergeSortedArray([1, 2, 3, 0, 0, 0], 6, [2, 5, 6], 3)).toBe(3);
});
