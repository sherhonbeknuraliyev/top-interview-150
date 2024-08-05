function maxProfit2(prices) {
  let max_profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      max_profit += prices[i] - prices[i - 1];
    }
  }

  return max_profit;
}

console.log(maxProfit2([7, 1, 5, 3, 6, 4]));

module.exports = maxProfit2;
