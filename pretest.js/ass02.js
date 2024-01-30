function highestNumber(num){
    let result = [];
    result = String(num).split('').map(num => parseInt(num)).sort((a,b)=>b-a);
    result = result[0];
    return result;
}
console.log(highestNumber(379));
console.log(highestNumber(377401));
console.log(highestNumber(2));