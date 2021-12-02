//Q2

let random;
let randomNum = [];
for(let i = 0; i<10; i++){
    random = Math.floor(Math.random()*900)+100;
    randomNum.push(random);
}
randomNum.sort((a,b) => a-b);
console.log("Sorted Array");
console.log(randomNum);
console.log("Second Maximum number = "+randomNum[8]);
console.log("Second Minimum number = "+randomNum[1]);