//Q1

let dieRollNum;
let isReached = false;
let dieRollMap = new Map()
function updateDieRollMap(dieRollNum){
    dieRollMap.set(dieRollNum, dieRollMap.get(dieRollNum)+1);
}
function maximumNum(dieRollNum){
    if(dieRollMap.get(dieRollNum)==10){
        console.log(dieRollNum+" has maximum times = 10");
        return true;
    }
    return false;
}
function minimumNum(){
    let keyNum = 1;
    let min = dieRollMap.get(1);
    for(const [key,value] of dieRollMap.entries()){
        if(value<min){
            min = value;
            keyNum = key;
        }
    }
    console.log(keyNum+" has minimum times = "+min);
}
for(let i=1;i<7;i++){
    dieRollMap.set(i,0)
}
while(!isReached){
    dieRollNum = Math.floor(Math.random()*6)+1;
    updateDieRollMap(dieRollNum)
    isReached = maximumNum(dieRollNum)
}
minimumNum();
