function getBudgets(info){
    return info.reduce((a,info)=>a + info.budget,0)
}
console.log(getBudgets([
    { name: "John"  , age:21 , budget: 23000 },
    { name: "Steve" , age:32 , budget: 40000 },
    { name: "Martin", age:16 , budget: 2700  }
]))