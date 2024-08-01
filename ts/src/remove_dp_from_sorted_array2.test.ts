import { expect, test } from "@jest/globals";

import removeDpFromSorted2 from "./remove_dp_from_sorted_array2";

test("remove duplicates from sorted array 2", () => {
  expect(removeDpFromSorted2([1, 1, 1, 2, 2, 3])).toBe(5);
  expect(removeDpFromSorted2([0, 0, 1, 1, 1, 1, 2, 3, 3])).toBe(7);
});
