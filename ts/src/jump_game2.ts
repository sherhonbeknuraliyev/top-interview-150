function jumpGame2(nums: number[]) {
  let jumps = 0;
  let farthest = 0;
  let lastMaxReach = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (i + nums[i] > farthest) {
      farthest = i + nums[i];
    }
    if (lastMaxReach == i) {
      jumps++;
      lastMaxReach = farthest;
    }
  }
  return jumps;
}

export default jumpGame2;
