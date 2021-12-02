//Q1

let random;
let randomNum = [];
for(let i = 0; i<10; i++){
    random = Math.floor(Math.random()*900)+100;
    randomNum.push(random);
}
console.log(randomNum);
function getMaxOfArray(max) {
    return Math.max(...max);
}
let max = getMaxOfArray(randomNum);
randomNum.splice(randomNum.indexOf(max), 1);
console.log("Second Maximum number = "+getMaxOfArray(randomNum));
function getMinOfArray(min){
    return Math.min(...min);
}
let min = getMinOfArray(randomNum);
randomNum.splice(randomNum.indexOf(min),1);
console.log("Second Minimum number = "+getMinOfArray(randomNum));