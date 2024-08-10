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

var num=0
var numArray=[]
function FizzBuzz(num,numArray) {
    if (num < 101)
    {
        if(num%3==0)
        {
            numArray.push("Fizz")
        }
        else if(num%5==0)
        {
            numArray.push("Buzz")
        }
        else if(num%3==0 && num%5==0)
        {
            numArray.push("FizzBuzz")
        }
        else
        {
            numArray.push(num)
        }
        FizzBuzz(num+1,numArray)
    }
    return numArray
    
}

numArray=FizzBuzz(num,numArray)
numArray