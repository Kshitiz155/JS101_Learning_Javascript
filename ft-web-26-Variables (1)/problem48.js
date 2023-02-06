let a = [1, 2, 3, -3, -2, -1];
for(let i=0;i<a.length;i++){
  if(a[i]<0){
    a[i]=0;
  }
  else{
    a[i]=1;
  }
}
console.log(a);


