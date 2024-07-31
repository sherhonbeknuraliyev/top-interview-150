import { expect, test } from "@jest/globals";

import removeDpFromSorted from "./remove_dp_from_sorted_array";

test("remove duplicates from sorted array", () => {
  expect(removeDpFromSorted([1, 1, 2])).toBe(2);
  expect(removeDpFromSorted([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
});
