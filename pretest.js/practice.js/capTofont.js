function capToFont(text){
upper = "";
lower = "";

for(let index of text ){
    if(index === index.toUpperCase()){
        upper += index  
    }else lower += index 
}
return upper + lower

}

console.log(capToFont("PxIhNoLuOeEqwVrrtX"))