//Q5

const prompts = require("prompt-sync")();
let number = parseInt(prompts("Enter a number upto required range : "));
let repeatedNum = [];
function reverseOfNum(num){
    let updateNum = 0;
    while(num!=0){
        let unitDigit = num%10
        updateNum = updateNum*10 + unitDigit 
        num = Math.floor(num/10);
    }
    return updateNum;
}
for(let i=0;i<=number;i++){
    if(reverseOfNum(i)===i && i>9){
        repeatedNum.push(i)
    }
}
console.log(repeatedNum);