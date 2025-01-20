function rotate(nums: number[], k: number): void {
    let count = 1
    let a = 0
    
    while (count <= k) {
        a = nums[nums.length-1]
        nums.unshift(a)
        nums.pop()
        count++
    }
};