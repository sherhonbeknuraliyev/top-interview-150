const jumpGame = require("./jump_game");

test("jump game", () => {
  expect(jumpGame([2, 3, 1, 1, 4])).toBe(true);
  expect(jumpGame([3, 2, 1, 0, 4])).toBe(false);
});
