var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  let begin = 0 , end = right;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return [left, right];
    } else if (nums[left] > target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
