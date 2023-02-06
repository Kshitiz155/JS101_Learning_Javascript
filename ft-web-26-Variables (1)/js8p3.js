let sum=0;
let num=[1,2,3,4,5,6,7];
let count=0;

for(let i=0;i<num.length;i++){
  if(num[i]%2==0){
    sum=sum+num[i];
    count++;
  }
}
console.log(sum/count);
  