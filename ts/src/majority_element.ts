function majorityElement(nums: number[]) {
  let count: number = 0;
  let res: number = nums[0];
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

export default majorityElement;
