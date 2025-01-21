function maxProfits(prices: number[]): number {
    let maximumProfit = 0;
    let minPrice = Number.MAX_VALUE;

    for (let i = 0; i<prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else if (minPrice < prices[i]) {
            maximumProfit = maximumProfit+(prices[i] - minPrice)
            minPrice = prices[i]
        }
    }
    return maximumProfit
};