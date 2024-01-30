function totalVolume(...args){
    let sum = 0;
    for (let arg of args) sum +=arg;
    return sum;
}

console.log(totalVolume([1,1,1]))