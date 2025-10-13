function backtracking(nums, idx, parity, memo) {
  if (nums.length === idx) {
    return 0;
  }
  if (!memo[idx]) memo[idx] = [];
  if (memo[idx][parity] !== undefined) {
    return memo[idx][parity];
  }

  let skip = backtracking(nums, idx + 1, parity, memo);
  const val = parity === 0 ? +nums[idx] : -nums[idx];
  const take = val + backtracking(nums, idx + 1, 1 - parity, memo);

  memo[idx][parity] = Math.max(skip, take);
  return memo[idx][parity];
}
var maxAlternatingSum = function (nums) {
  return backtracking(nums, 0, 0, new Array(nums.length));
};

console.log(maxAlternatingSum([4, 2, 5, 3]));
