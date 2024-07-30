function mergeSortedArray(nums1, m, nums2, n) {
  let mergedPointer = m + n - 1;
  let firstArrPointer = m - 1;
  let secondArrPointer = n - 1;

  while (secondArrPointer >= 0) {
    if (nums1[firstArrPointer] > nums2[secondArrPointer]) {
      nums1[mergedPointer] = nums1[firstArrPointer];
      firstArrPointer--;
      mergedPointer--;
    } else {
      nums1[mergedPointer] = nums2[secondArrPointer];
      secondArrPointer--;
      mergedPointer--;
    }
  }
  return nums1;
}

module.exports = mergeSortedArray;
