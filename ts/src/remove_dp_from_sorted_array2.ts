function removeDpFromSorted2(nums: number[]) {
  let newIndex: number = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[newIndex - 2] != nums[i]) {
      nums[newIndex] = nums[i];
      newIndex++;
    }
  }

  return newIndex;
}

export default removeDpFromSorted2;
