let arr1 = ["john","taylor","john"];
let arr2 = ["The","Big","Cat"];
let arr3 = [1,0,1,0];
function removeDups(arr) { 
    return arr.filter((item,index) => arr.indexOf(item) === index); 
}
console.log(removeDups(arr3));
console.log(removeDups(arr2)); 
console.log(removeDups(arr1));
