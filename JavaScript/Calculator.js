// var n = Math.random();

// var dice = Math.floor(n*6)+1
// console.log(dice)


// //=== check for value and the datatypes
// //== checks for value only

// function bmiCalculator (weight, height) {
//     var bmi = (weight / (height*height))
//     var interpretation
    
//     if(bmi<18.5)
//     {
//         interpretation=("Your BMI is "+bmi+", so you are underweight.")
//     }
//     else if(bmi>=18.5 && bmi<=24.9)
//     {
//         interpretation=("Your BMI is "+bmi+", so you have a normal weight.")
//     }
//     else if(bmi>24.9)
//     {
//         interpretation=("Your BMI is "+bmi+", so you are overweight.")
//     }
    
//     return interpretation;
// }

// console.log(bmiCalculator(85,1.8))

var color =['red','green','blue']
console.log(color.length)

var num=0
var numArray=[]
function FizzBuzz(num) {
    if(i%3==0)
    {
        numArray.push(num)
        console.log("Fizz")
    }
    else if(i%5==0)
    {
        console.log("Buzz")
    }
    else if(i%3==0 && i%5==0)
    {
        console.log("FizzBuzz")
    }
    else
    {
        console.log(i)
    }
}