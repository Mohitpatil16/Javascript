// "This" keyword refers to an object that is executing the current piece of code.
const student = {
    name : "Shraddha",
    age : 21,
    eng : 94,
    math : 97,
    phy : 95,
    getAvg(){
        let avg = (this.eng+this.math+this.phy)/3;
        console.log(`${this.name} total marks average is ${avg}`);
    }
}