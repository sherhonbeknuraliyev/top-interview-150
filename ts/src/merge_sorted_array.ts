function mergeSortedArray(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  let mergedPointer: number = m + n - 1;
  let firstArrPointer: number = m - 1;
  let secondArrPointer: number = n - 1;

  while (secondArrPointer >= 0) {
    if (
      firstArrPointer >= 0 &&
      nums1[firstArrPointer] > nums2[secondArrPointer]
    ) {
      nums1[mergedPointer] = nums1[firstArrPointer];
      firstArrPointer--;
    } else {
      nums1[mergedPointer] = nums2[secondArrPointer];
      secondArrPointer--;
    }
    mergedPointer--;
  }

  return nums1;
}

export default mergeSortedArray;
