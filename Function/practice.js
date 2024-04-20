//Function defination.
function rolldice(){
    let random = Math.floor(Math.random()*6)+1;
    console.log(random);
}

rolldice();               //Function call
rolldice();


//Fuction with arguments:-

function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}


printInfo("Rohit",38);
printInfo("Rohit");
printInfo(1);

//Printing Multiplication Table Using Function

function printTable(n){
    for(let i = n; i<= n*10 ; i+=n){
        console.log(i);
    }
}

printTable(2);

function sum(x,y){
    return x+y;
}

console.log(sum(sum(2,4),3));

//Nested Function
let greet = "hello";
function changeGreet(){
     let greet  = "namaste";   
     console.log(greet);

     function innerGreet(){
        console.log(greet);
     }
}

console.log(greet);
changeGreet();

//Object creation
const calculator =  {
    num : 45,
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return  a*b;
    },
    div: function(a,b){
        return a/b;
    }
}

//This is the syntax for arrow function.
const mod = (a,b) => {
    return a%b;
}

const cube = a => {
    return a*a*a;
}

const pow = (a,b) =>(
    a**b 
)

//Set Timeout function

//Syntax = setTimeout(function,timeout in ms)
console.log("Hiee there!!");
setTimeout(()=>{
    console.log("Apna College..");
},4000)
console.log("Welcome to..");

let id = setInterval(()=>{
    console.log("Hellooo.");
},2000)
console.log(id)

let id2 = setInterval(()=>{
    console.log("Mohit.");
},2000)
console.log(id)

//NOTE - To stop the setInterval function call ClearInterval(id) function.