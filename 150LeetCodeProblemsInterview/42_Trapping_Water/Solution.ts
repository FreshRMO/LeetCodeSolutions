function trap(heights: number[]): number {
    if (!heights) return 0;
    
    let totalWater: number = 0;
  
    let leftMax: number = 0;
    let rightMax: number = 0;
    type index = number;
    let leftPointer: index = 0;
    let rightPointer: index = heights.length - 1;
    while (leftPointer < rightPointer) {
      const [leftValue, rightValue] = [heights[leftPointer], heights[rightPointer]];
      if (leftValue > leftMax) leftMax = leftValue;
      if (rightValue > rightMax) rightMax = rightValue;
      
      if (leftMax < rightMax) {
        totalWater += leftMax - leftValue;
        leftPointer++;
      } else {
        totalWater += rightMax - rightValue;
        rightPointer--;
      }
    }
    return totalWater;
  };