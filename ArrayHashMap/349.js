var intersection = function (nums1, nums2) {
  let set = new Set(nums1);

  let ans = new Set();

  for (let num of nums2) {
    if (set.has(num)) {
      ans.add(num);
    }
  }

  return [...ans];
};
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
console.log(intersection(nums1, nums2));
