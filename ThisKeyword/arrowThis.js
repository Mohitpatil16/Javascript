const student= {
    name : "Rohit",
    marks : 45,
    prop : this,  //global scope
    getName: function(){
        console.log(this);
        return this.name;   //Function object scope
    },
    getMarks: ()=>{
        console.log(this);   //Parents scope
        return this.marks;
    }
}