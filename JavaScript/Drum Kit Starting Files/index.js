/*document.querySelector("button").addEventListener("click",handleClicked) //function call with braces means to get it call straightforward rather waiting for button to be clicked
//that's why we just call the name so it waits for click to happen
function handleClicked()
{
    alert("I got Clicked")
}*/


//transform to anaymous function
var drumButtonCount =document.querySelectorAll(".drum").length
var audio = new Audio("./sounds/tom-1.mp3")
for(var i=0;i<drumButtonCount;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){ audio.play()})
}

