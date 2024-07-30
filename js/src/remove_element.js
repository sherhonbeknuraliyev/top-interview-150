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

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

module.exports = removeElement;
