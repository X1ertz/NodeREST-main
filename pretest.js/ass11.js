function isValidIP(str){
    let Ip = str.split('.').map(m => m.split(''));
    console.log(Ip);

    if(Ip.length === 4) {
        for(let i = 0 ; i< Ip.length ; i ++){
            for(let j =0 ; j<Ip[i].length ; j++){
                if(parseInt(Ip[i]) < 1 || parseInt(Ip[i]) >= 255){
                    return false
                }
                else if (Ip[i][0]==='0'){
                    return false
                }
            }
        }
        return true;
    }
    else return false
}


console.log(isValidIP("123.56.8.04"));