const favMovie= "avatar";
let guess = prompt("Guess the favourite movie?");

while (favMovie != guess && guess!="quit"){
    guess = prompt("wrong guess, pls try again");
}

if(guess === favMovie){
    console.log("Congrats!! You guess it right.");
}else{
    console.log("you quit.")
} 

//break:-

let i = 1;
while(i<=5){
    if (i===3){
        break;
    }
    console.log(i);
    i++;
}


//Loops in arrays:-
console.log("Printing the array of fruits using for loop:-")
let fruits = ["Mango","Banana","Pineapple","Apple","Orange","Guava","Watermelon"];
for(let i =0 ; i<fruits.length; i++){
    console.log(i , fruits[i]);
}