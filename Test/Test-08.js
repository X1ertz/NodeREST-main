const arr1 = [1,2,3];
    const target1 = 3;
const arr2 = [1,2,3];
    const target2 = 6;
const arr3 = [1,2,3];
    const target3 = 9;
function simplePair(arr,target){
    if(arr.lenght!=0){
        const pairs = [];        
        for (let i = 0; i < arr.length; i++) {

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] * arr[j] === target) {
                    pairs.push([arr[i], arr[j]]);
                
        }
        }
    }
    return pairs.length !== 0 ? pairs : null;
    
}else{
    return null;
    }
}
    console.log(simplePair(arr1,target1));
    console.log(simplePair(arr2,target2));
    console.log(simplePair(arr3,target3));