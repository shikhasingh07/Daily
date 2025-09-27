function bracktracking(nums, n, idx, current, numsSet) {
  if (idx === n) {
    return numsSet.has(current) ? null : current;
  }

 // first try adding "0"
  let res = bracktracking(nums, n, idx + 1, current + "0", numsSet);
  if (res) return res;

  // if not found, try adding "1"
  res = bracktracking(nums, n, idx + 1, current + "1", numsSet);
  if (res) return res;

  return null
}

var findDifferentBinaryString = function (nums) {
  let numsSet = new Set(nums);
  return bracktracking(nums, nums.length, 0, "", numsSet);
};

console.log(findDifferentBinaryString(["01", "10"]));
