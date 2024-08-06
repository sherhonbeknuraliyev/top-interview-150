function jumpGame2(nums) {
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

module.exports = jumpGame2;

console.log(jumpGame2([2, 3, 1, 1, 4]));
