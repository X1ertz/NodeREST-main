function numberSplit(num){
    const result = [];
    if(num % 2 == 0 ){
        result.push(num/2);
        result.push(num/2);
    }else{
        result.push(Math.floor(num/2));
        result.push(Math.ceil(num/2));
    }
    return result;
}

console.log(numberSplit(-11));
console.log(numberSplit(19));
console.log(numberSplit(12));
console.log(numberSplit(-12));