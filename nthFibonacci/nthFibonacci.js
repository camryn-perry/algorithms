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
  if(num in fibNums){
    console.log(fibNums[num])
    return fibNums[num]
  // }else{
  //   //continue with recursion, add solution to fibNums
  //   fibNums[num] = nthFibonacci(num-1, fibNums) + nthFibonacci(num-2, fibNums);
  //   return fibNums[num];
  // }

}
}
module.exports = nthFibonacci;
