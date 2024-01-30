function capToFont(text){
    let upper = "";
    let lower = "";

    for(let index of text){
    if(index === index.toUpperCase())upper += index;
    
    else lower += index;
    }
    return upper+lower;
}
console.log(capToFont("ApYHa"));