var randomNumber1 = Math.random()
var dice1 = Math.floor(randomNumber1*6)+1

var randomImage="dice"+dice1+".png"
var imageSource="./images/"+randomImage

var image1=document.querySelectorAll("img")[0]
image1.setAttribute("src",imageSource)

var randomNumber1 = Math.random()
var dice2 = Math.floor(randomNumber1*6)+1

var randomImage="dice"+dice2+".png"
var imageSource="./images/"+randomImage


var image2=document.querySelectorAll("img")[1]
image2.setAttribute("src",imageSource)

if (dice1>dice2)
{
    document.querySelector("h1").innerHTML="🚩 Play 1 wins"
}
else if(dice2 >dice1)
{
    document.querySelector("h1").innerHTML="Play 2 wins 🚩"
}
else
{
    document.querySelector("h1").innerHTML="Draw, Refresh Me"
}