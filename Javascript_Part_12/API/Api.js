// let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log("data1 - ",data.fact);
//         return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log("data2s - ",data.fact);
//     })
//     .catch((err)=>{
//         console.log("ERROR - ",err);
//     });

let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    let fact = await getFacts(); 
    console.log(fact);
    let  p = document.querySelector("#result");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";
async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("error-",e); 
        return "NO fact found. ";
    }

}