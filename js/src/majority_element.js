function majorityElement(nums) {
  let count = 0;
  let res = nums[0];
  for (let num of nums) {
    if (count == 0) {
      res = num;
    }
    if (res == num) {
      count++;
    } else {
      count--;
    }
  }
  return res;
}

module.exports = majorityElement;
