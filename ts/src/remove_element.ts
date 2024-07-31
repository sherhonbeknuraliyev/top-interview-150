function removeElement(nums: number[], val: number) {
  let newIndex: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[newIndex] = nums[i];
      newIndex++;
    }
  }

  return newIndex;
}

export default removeElement;
