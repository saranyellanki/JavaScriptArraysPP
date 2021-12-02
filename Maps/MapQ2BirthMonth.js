//Q2

let birthMonthMap = new Map()
let isReached = false;
for(let i=1;i<13;i++){
    birthMonthMap.set(i,0)
}
function updateBirthMonth(birthMonth){
    birthMonthMap.set(birthMonth, birthMonthMap.get(birthMonth)+1);
}
let individual = 0;
while(individual<50){
    let birthMonth = Math.floor(Math.random()*12)+1;
    updateBirthMonth(birthMonth);
    individual++;
}
for(const [key,value] of birthMonthMap.entries()){
    console.log("Month "+key+" has "+value+" Individuals");
}