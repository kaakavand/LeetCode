function findMedianSortedArrays(nums1, nums2) {
  const array = [...nums1, ...nums2].sort();

  let res = 0;

  if (array.length % 2 === 0) {
    const value =
      (array[Math.floor(array.length / 2)] +
        array[Math.floor(array.length / 2) - 1]) /
      2;
    res = value;
  } else {
    res = array[Math.floor(array.length / 2)];
  }

  console.log(res);
  
}

findMedianSortedArrays([3], [-1 , -2]);
