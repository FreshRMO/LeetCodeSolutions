function hIndex(citations: number[]): number {
    return citations.sort((a,b) => b-a).filter((x,i) => x > i).length 
};