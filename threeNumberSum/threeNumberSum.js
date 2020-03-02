function threeNumberSum(array, targetSum){
  const allSums = [];
  //sort array in order to use pointers
  array.sort((a,b) => a - b);
  for(let i = 0; i < array.length; i++){
    let current = array[i];
    let left = i + 1;
    let right = array.length -1;
    //while the left pointer is less than right pointer, add up values in array
    //to current value
    while(left < right){
      let currentSum = current + array[left] + array[right];
      if(currentSum === targetSum){
        allSums.push([current, array[left], array[right]]);
        left++;
        right--;
      }else if(currentSum < targetSum){
        left++
      }else if(currentSum > targetSum){
        right--;
      }
    }
  }
  return allSums;
}
module.exports = threeNumberSum;
