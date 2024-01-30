
function isValidIP(ip) {
    if (ip.length === 4) {
        return true;
    } else {
        return false;
    }
}

console.log(isValidIP([1, 2, 3, 4])); 
console.log(isValidIP([1,2,3]));