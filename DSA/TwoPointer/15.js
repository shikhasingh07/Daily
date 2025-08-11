// Main thing to remeber in this is to how to remove duplicate
var threeSum = function (nums, tar) {
  nums.sort((a, b) => a - b);
  let ans = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let lf = i + 1;
    let right = nums.length - 1;
    let target = 0;

    while (lf < right) {
      let sum = nums[lf] + nums[right];
      if (sum === target) {
        ans.push([nums[i], nums[lf], nums[right]]);
        while (lf < right && nums[lf] === nums[lf + 1]) lf++;
        while (lf < right && nums[right] === nums[right - 1]) right--;
        lf++;
        right--;
      } else if (sum < 0) {
        lf++;
      } else {
        right--;
      }
    }
  }

  return ans;
};

console.log(threeSum([1, -1, -1, 0], 0));
// Output: [[-1, -1, 2], [-1, 0, 1]]
