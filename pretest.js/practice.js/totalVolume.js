function totalVolume(...num){
let nums = 0;
let result = 0;
nums = num.map(num => num.reduce((a,b)=> a*b,1));
result = nums.reduce((a,b)=>a+b,0);
return result;
}
console.log(totalVolume([1,2,3,4,5],[1,2,3,4,5]));