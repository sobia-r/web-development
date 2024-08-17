/*var bellBoy1 = {
    name:"Timmay",
    age:19,
    hasWorkPermit:true,
    languages: ["french","english"]
}

var bellBoy1 = {
    name:"Timmay",
    age:19,
    hasWorkPermit:true,
    languages: ["french","english"]
}

var bellBoy1 = {
    name:"Timmay",
    age:19,
    hasWorkPermit:true,
    languages: ["french","english"]
}
*/
//redundent declaration, solution constructor function
//name of the constructor function starts with capital letter

function BellBoy(name,age,hasWorkPermit,languages)
{
    this.name=name
    this.age=age
    this.hasWorkPermit=hasWorkPermit
    this.languages=languages
    this.moveSuitCase = function() {
        alert("May i Take your suitcase?")    }
}

//var bellBoy1 = new BellBoy("Timmay",19,true,["Fresh","English"])
//console.log(bellBoy1.age)