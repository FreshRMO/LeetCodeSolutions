const mergeSortedArray = (nums1, m, nums2, n) => {
    nums1.splice(m, n);
    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
}