function removeDpFromSorted(nums: number[]) {
  let newIndex: number = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[newIndex - 1] != nums[i]) {
      nums[newIndex] = nums[i];
      newIndex++;
    }
  }

  return newIndex;
}

export default removeDpFromSorted;
