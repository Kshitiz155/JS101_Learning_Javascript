let x = 1;
let num = 0;
while (x <= 10) {
  if (x % 2 != 0) {
    num = 3 * x;
    if (num > 9) {
      console.log(num);
    }
  }
  x++;
}
console.log(x);


/*
let x=15;
let n=1;
let count=0;
while(n<=x){
  if(x%n==0){
    count++;
  }
  n++;
}
console.log(count)
*/