var containsNearbyDuplicate = function (nums, k) {
    let map = new Map();
    for(let i = 0 ; i <= nums.length  ;i ++){
        if (map.has(nums[i])) {
            //window size 
            if (i - map.get(nums[i]) <= k) {
                return true;
            }
           
        }
         map.set(nums[i], i);
    }
    return false;
};