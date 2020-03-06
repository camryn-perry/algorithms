//using recursion
// function nthFibonacci(num){
//   //establish base cases
//   if(num <= 1){
//     return 0;
//   }if(num === 2){
//     return 1;
//   }else{
//     return nthFibonacci(num - 1) + nthFibonacci(num - 2)
//   }
// }

//dynamic programming solution
//if number is already in saved nums, return that number. Otherwise, proceed with recursion.
//start off fibNums with two base case values
function nthFibonacci(num, fibNums = {1: 0, 2:1}){
  //must check for key, as the value of key 1 is a falsey value--> 0
  if(num in fibNums){
    return fibNums[num]
  }else{
    //continue with recursion, add answer to fibNums
    fibNums[num] = nthFibonacci(num-1, fibNums) + nthFibonacci(num-2, fibNums);
    return fibNums[num];
  }
}
module.exports = nthFibonacci;
