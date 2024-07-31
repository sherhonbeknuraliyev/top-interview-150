function removeElement(nums, val) {
  let newIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[newIndex] = nums[i];
      newIndex++;
    }
  }

  return newIndex;
}

module.exports = removeElement;
