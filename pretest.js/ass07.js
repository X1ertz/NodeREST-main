function sumToSmallest(...arr){
    const sub = arr.filter(m=>m>0);//กรองตัวเลขติดลบ
    
    let num1 = Math.min(...sub);
    sub.splice(arr.indexOf(num1),1);// ,1 คือการลบแค่ตัวเดียว
    let num2 = Math.min(...sub);
    
    return num1 + num2;
}
console.log(sumToSmallest(2,9,6,-1))