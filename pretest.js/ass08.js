
function simplePair(arr,target){
    if(arr.lenght!=0){
        const pairs = [];       
        for (let i = 0; i < arr.length; i++) {

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] * arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
                result = pairs.flatMap(pairs => pairs)
                
                
        }
        }
    }
    return pairs.length !== 0 ? result : null;
    
}else{
    return null;
    }
}
    console.log(simplePair([1,2,3],3));
    console.log(simplePair([1,2,3],6));
    console.log(simplePair([1,2,3],9));
