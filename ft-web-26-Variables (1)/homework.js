// let str="go%.a$";
// let bag="";
// for(let i=0;i<str.length;i++){
//   if(str[i]=="%"){
//   bag=bag+"h";
//     }
//    else if(str[i]=="$"){
//    bag=bag+"n";
//  }
//    else if(str[i]=="."){
//  continue;
// }
//  else{
//   bag=bag+str[i];
//   }
// }
// console.log(bag);

let str="KitKat";
let a="";
let b="";
for(let i=str.length-4;i>=0;i--){
  a=a+str[i];
}
for(let i=str.length-1;i>=3;i--){
  b=b+str[i];
}
console.log(a+b);