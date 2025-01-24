function productExceptSelf(nums: number[]): number[] {
    let zeroLength = 0;
    let maxProduct = 1;
    let products: number[] = [];

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] == 0) {
            zeroLength++;
        }
        else {
            maxProduct *= nums[i];
        }
    }
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            products.push(zeroLength == 0 ? maxProduct/nums[i] : 0);
        }
        else {
            if(zeroLength == 1) {
                products.push(maxProduct);
            }
            else {
                products.push(0);
            }
        }
    }
    return products;
};