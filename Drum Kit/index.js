
const numberOfDrumButtons = document.querySelectorAll(".drum").length

// Buttons Press
for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML)
        
    });
    
};

// Keyboards Press
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play()
            break;
        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play()
            break;
        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play()
            break;
        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3")
            tom4.play()
            break;
        case "j":
            let snare = new Audio("./sounds/snare.mp3")
            snare.play()
            break;
        case "k":
            let crash = new Audio("./sounds/crash.mp3")
            crash.play()
            break;
        case "l":
            let kick = new Audio("./sounds/kick-bass.mp3")
            kick.play()
            break;
        default: console.log(this.innerHTML)
    }
}


function buttonAnimation(currentKey){
    let activeButton = document.querySelectorAll("." + currentKey);
    console.log(activeButton);
    activeButton[0].style;
    console.log(activeButton[0].classList);
    if (activeButton[0].classList.contains("pressed")){
        activeButton[0].classList.remove("pressed");
    } 
    else{
        activeButton[0].classList.add("pressed");
    }
}

