const mergeSortedArray = require("./merge_sorted_array");

test("merged array", () => {
  expect(mergeSortedArray([1, 2, 3], 3, [2, 5, 6], 3)).toEqual([
    1, 2, 2, 3, 5, 6,
  ]);
});
