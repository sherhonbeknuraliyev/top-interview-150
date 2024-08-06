const jumpGame2 = require("./jump_game2");

test("jump game 2", () => {
  expect(jumpGame2([2, 3, 1, 1, 4])).toBe(2);
  expect(jumpGame2([2, 3, 0, 1, 4])).toBe(2);
});
