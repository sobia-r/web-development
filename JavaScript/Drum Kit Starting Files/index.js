/*document.querySelector("button").addEventListener("click",handleClicked) //function call with braces means to get it call straightforward rather waiting for button to be clicked
//that's why we just call the name so it waits for click to happen
function handleClicked()
{
    alert("I got Clicked")
}*/


//transform to anaymous function
var drumButtonCount =document.querySelectorAll(".drum").length
var audio = new Audio("./sounds/tom-1.mp3")
//use of switch statement to play audio linked with individual button
for(var i=0;i<drumButtonCount;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        //option 1: 
        //this.style.color="white"
        
        var buttonInnerHTML=this.innerHTML
        makeSound(buttonInnerHTML)
        /*switch (buttonInnerHTML)
        {
            case 'w':
                var tom1 = new Audio("./sounds/tom-1.mp3")
                tom1.play();
                break;
            case 'a':
                var tom2 = new Audio("./sounds/tom-2.mp3")
                tom2.play();
                break;
            case 's':
                var tom3 = new Audio("./sounds/tom-3.mp3")
                tom3.play();
                break;
            case 'd':
                var tom4 = new Audio("./sounds/tom-4.mp3")
                tom4.play();
                break;

            case 'j':
                var crash= new Audio("./sounds/crash.mp3")
                crash.play();
                
                break;
            case 'k':
                var snare = new Audio("./sounds/snare.mp3")
                snare.play();
                break;
            case 'l':
                var kick_bass = new Audio("./sounds/kick-bass.mp3")
                kick_bass.play();
                break;
            default:
                console.log()
        }*/
 
    })

// Add keypress using constructor function to hit key playing audio
}

document.addEventListener("keypress",function(event){
    //var pressed_key=event
    //console.log(pressed_key)
    makeSound(event.key)
    console.log("function called")
})

function makeSound(key)
{
    console.log("In switch ")
    switch (key)
        {
            case 'w':
                var tom1 = new Audio("./sounds/tom-1.mp3")
                tom1.play();
                break;
            case 'a':
                var tom2 = new Audio("./sounds/tom-2.mp3")
                tom2.play();
                break;
            case 's':
                var tom3 = new Audio("./sounds/tom-3.mp3")
                tom3.play();
                break;
            case 'd':
                var tom4 = new Audio("./sounds/tom-4.mp3")
                tom4.play();
                break;

            case 'j':
                var crash= new Audio("./sounds/crash.mp3")
                crash.play();
                
                break;
            case 'k':
                var snare = new Audio("./sounds/snare.mp3")
                snare.play();
                break;
            case 'l':
                var kick_bass = new Audio("./sounds/kick-bass.mp3")
                kick_bass.play();
                break;
            default:
                console.log()

    }
}