function jumpGame(nums: number[]) {
  let farthest: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > farthest) {
      return false;
    } else if (farthest >= nums.length - 1) {
      return true;
    } else if (i + nums[i] > farthest) {
      farthest = i + nums[i];
    }
  }
  return false;
}

export default jumpGame;
