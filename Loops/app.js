let n = prompt("Write your number:-");
n = parseInt(n);        //Prompt convert the input into string so parseInt converts string to number.
for(let i=n; i<=n*10 ; i=i+n){
    console.log(i);
}
// for(i=5; i<=50 ; i+=5){
//     console.log(i);
// }

// Nested for loop:-
for(i=1 ; i<=3 ; i++){
    console.log(`outer loop ${i}`);
    for(j=1 ; j<=3 ; j++){
        console.log(j);
    }
}

//While Loop
i = 0;
while(i<=20){
    console.log(i);
    i++;
}
