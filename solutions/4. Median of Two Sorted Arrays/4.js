/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const arrConcat = nums1.concat(nums2)
  
  const arrSorted = arrConcat.sort((a, b) => a-b)
  
  if (arrSorted.length % 2 == 0) {
      return (arrSorted[arrSorted.length / 2] + arrSorted[(arrSorted.length / 2) - 1]) / 2
  }
      
  return arrSorted[(arrSorted.length - 1) / 2]
};