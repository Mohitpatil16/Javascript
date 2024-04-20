let heroes = [
    ["ironman","spiderman" , "thor"],
    ["superman","wonderwoman","flash"]
]

for(let i = 0; i<heroes.length; i++){
    console.log(i,heroes[i],heroes[i].length);
    for(let j = 0; j<heroes[i].length ; j++){
        console.log(`j = ${j}, ${heroes[i][j]}`);
    }
}

//Spread -  spread is used as an iterator in js for iteration in iterator object

let arr = [1,2,4,5,6,7,8,9]
Math.min(...arr);