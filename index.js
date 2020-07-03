function largestSum(numberArray,k){
    if(k===1){
        return product(numberArray);
    }
    let result=[];
    for(let i=1;i<=numberArray.length-k+1;i++){
       result.push(product(numberArray.slice(0,i))+largestSum(numberArray.slice(i),k-1));
    }
  return Math.max(...result);
}
function product(array){
    return array.reduce((a, b) => a * b);
}
console.log(largestSum([9,1,2,3,9],3)===64);
console.log(largestSum([9,1,2,3,9],1)===486);
console.log(largestSum([9,1,2,3,9],2)===63);
console.log(largestSum([0,1,2,3,4],3)===25);
console.log(largestSum([0,1,2,3,4],2)===24);
console.log(largestSum([0,1,2,3,4],1)===0);
console.log(largestSum([0,1,2,3,4],1)===0);
console.log(largestSum([10, 10, 2, 3, 9], 3)===212);