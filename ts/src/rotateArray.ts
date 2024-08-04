function rotateArray(nums: number[], k: number): number[] {
  let len = nums.length;
  k = k % len;

  function reverse(nums: number[], start: number, end: number) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  reverse(nums, 0, len - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, len - 1);

  return nums;
}

export default rotateArray;
