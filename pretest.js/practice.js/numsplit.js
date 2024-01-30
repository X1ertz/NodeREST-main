function numberSplit(num){
let split = [];
if(num%2 === 0){
    split.push(num/2);
    split.push(num/2);
    return split;

}else split.push(Math.floor(num/2));
    split.push(Math.ceil(num/2));
    return split;

}
console.log(numberSplit(4));
console.log(numberSplit(11));
console.log(numberSplit(-11));