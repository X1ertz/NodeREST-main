function highgestDigit(num){
let nums = [];
nums =  String(num).split('').map(num=>parseInt(num)).sort((a,b )=>b-a);
nums = nums[0];
return nums;

}
console.log(highgestDigit(379))