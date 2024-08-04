function rotateArray(nums, k) {
  let len = nums.length;
  k = k % len;

  function reverse(nums, start, end) {
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

module.exports = rotateArray;

// second way

//   let len = nums.length;
//   let newArr = [];
//   k = k % len;

//   for (let i = 0; i < len; i++) {
//     let newIdx = (i + k) % len;
//     newArr[newIdx] = nums[i];
//   }

//   for (let i = 0; i < len; i++) {
//     nums[i] = newArr[i];
//   }
