function candy(ratings: number[]): number {
    const n = ratings.length, candies = new Array(n).fill(1);

    // Left-to-right pass
    for (let i = 1; i < n; i++) {
        if (ratings[i - 1] < ratings[i]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    // Right-to-left pass
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            // candies already filled for right traversal
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }

    // Calculate the total number of candies
    return candies.reduce((total, candy) => total + candy, 0);
};