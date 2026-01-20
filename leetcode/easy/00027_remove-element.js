/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let j=-1;
  for(var i=0;i<nums.length;i++){
      if(nums[i]!=val){
          j++;
          nums[j]=nums[i];
      }
  }
  return j+1;
};