function majorityElement(nums: number[]): number {
    const sortedNums: number[] = nums.sort((a, b) => b - a)

    const middleIndex = Math.floor((nums.length - 1) / 2)
    if (nums.length === 0) {
        return 0
    }

    return sortedNums[middleIndex];
};