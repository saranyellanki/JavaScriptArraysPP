//Q4

let intArr = [1,-6,7,2,-1,8,-7,-3];
for(let i=0;i<intArr.length-2;i++){
    for(let j=i+1;j<intArr.length-1;j++){
        for(let k=i+2;k<intArr.length;k++){
            if(intArr[i]+intArr[j]+intArr[k]===0){
                console.log(intArr[i]+" "+intArr[j]+" "+intArr[k]);
            }
        }
    }
}