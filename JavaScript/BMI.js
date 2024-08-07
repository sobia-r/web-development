function BMI_Calculator(weight,height)
{
    var BMI=(weight^2)/((height*0.3048)^2)
    return BMI
}

var weight = prompt("Enter weight in Kgs")
var height = prompt("Enter height in feet")
bmi=BMI_Calculator(weight,height)
alert("Your BMI: ",bmi)