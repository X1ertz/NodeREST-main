
function totalVolume(...num){
    let nums = 0;
    let result = 0;
    nums = num.map(num => num.reduce((accumulator, currentValue) => accumulator * currentValue, 1))
    result = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return result;
}
console.log(totalVolume([2,2,2],[2,1,1]))
console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]))
console.log(totalVolume([1,1,1]))