var numSubarrayProductLessThanK = function(nums, k) {
    let left = 0 ;
    let curr = 1 ;
    let count = 0;

    for(let right = 0 ; right < nums.length ; right++){
        curr *= nums[right];
         
         //[10] 
         while (curr >= k){
           curr /= nums[left++];
        }
       
     count += right-left+1
     
    }
    return count;
};
console.log(numSubarrayProductLessThanK([10,5,2,6],100))