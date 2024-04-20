let str = "apple";
console.log("String is :-",str);

if((str[0]==='a') && str.length>3){
    console.log("It is a good string.");
}else{
    console.log("It is not a good string.");
}

let num = 12;
if((num%3===0)&&((num+1===15)||(num-1===11))){
    console.log("safe");
}else{
    console.log("unsafe"); 
}

let num1 = 0;
if(num1){
    console.log("It is not equal to zero.")
}else{
    console.log("It is equal to zero.");
}

if(true){
    console.log("It is true.")
}else{
    console.log("It is not true.")
}