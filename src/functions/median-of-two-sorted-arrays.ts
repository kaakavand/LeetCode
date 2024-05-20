function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  
    const length = mergedArray.length;
    if (length % 2 === 0) {
      const mid1 = length / 2;
      const mid2 = mid1 - 1;
      const median = (mergedArray[mid1] + mergedArray[mid2]) / 2;
      return median;
    } else {
      const mid = Math.floor(length / 2);
      return mergedArray[mid];
    }
  }