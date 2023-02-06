for(let h=1;h<=10;h++){
  let a="";
  for(let v=1;v<=10;v++){
    if((h==1)||(h==10)){
        a=a+"*";
    }
    else if((v==1)||(v==10)){
      a=a+"*";
    }
    else{
      a=a+" ";
    }  
  }
  console.log(a);
}