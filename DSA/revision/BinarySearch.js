// const lowerBound = () => {
//     let low = 0 ;
//     let high = nums.length -1;

//     while (low <= high){
//         let mid = Math.floor((low + high)/2);

//         if(nums[mid] >= n){
//             ans = mid ;
//             high = mid - 1;
//         }else {
//             low = mid + 1;
//         }
//     }
// }

// var searchInsert = function(nums, target) {

//     if(nums.length === 0) return 0;

//     let low = 0;
//     let high = nums.length -1 ;
//     while (low <= high){
//         let mid = Math.floor ((low + high)/2);

//         if(nums[mid] >= target){
//             high = mid - 1;
//         }else {
//             low = mid + 1;
//         }
//     }
//     return low;
// };

const Findceli = (arr, x) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] >= x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low < arr.length ? arr[low] : -1; // Return -1 if no ceiling exists
};

const FindFloor = (arr, x) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] <= x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high >= 0 ? arr[high] : -1; // Return -1 if no floor exists
};

const floorandceli = (arr, x) => {
  const celi = Findceli(arr, x);
  const floor = FindFloor(arr , x); 
  return [celi , floor]
};
console.log(floorandceli([3, 4, 4, 7, 8, 10], 8));
