function maxProfit(prices: number[]) {
  let max_profit: number = 0;
  let min_price: number = Infinity;

  for (let price of prices) {
    if (price < min_price) {
      min_price = price;
    } else if (price - min_price > max_profit) {
      max_profit = price - min_price;
    }
  }

  return max_profit;
}

export default maxProfit;
