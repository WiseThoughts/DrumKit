let numberOfButtons = document.querySelectorAll(".drum").length;


// for (let i=0; i<numberOfButtons; i++){
//     let drum = document.getElementById("drums")[i].addEventListener("click", function(e){
//         const text = Element.innerHTML;
//         console.log(text)
//         makeSound(text)
//         buttonAnimation(text);
//     })
// };


document.addEventListener("keypress", function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
});


function makeSound(key){
    switch(key){

    case "q":
        let boom=new Audio("sounds/boom.wav");
        boom.play();
        break;

    case "w":
        let clap=new Audio("sounds/clap.wav");
        clap.play();
        break;

    case "e":
        let hiHat=new Audio("sounds/hihat.wav");
        hiHat.play();
        break;

    case "r":
        let kick=new Audio("sounds/kick.wav");
        kick.play();
        break;

    case "t":
        let openHat=new Audio("sounds/openhat.wav");
        openHat.play();
        break;

    case "a":
        let ride=new Audio("sounds/ride.wav");
        ride.play();
        break;

    case "s":
        let snare=new Audio("sounds/snare.wav");
        snare.play();
        break;

    case "d":
        let tink=new Audio("sounds/tink.wav");
        tink.play();
        break;

    case "f":
        let tom=new Audio("sounds/tom.wav");
        tom.play();
        break;

    default:console.log(key)

    }
}


function buttonAnimation(currentKey){
    let activeButton=document.querySelector("."+currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);
}


const boomClick = document.querySelector("q");
const kickClick = document.querySelector("r");
const clapClick = document.querySelector("w");
const hihatClick = document.querySelector("e");
const openhatClick = document.querySelector("t");
const rideClick = document.querySelector("a");
const snareClick = document.querySelector("s");
const tinkClick = document.querySelector("d");
const tomClick = document.querySelector("f");

boomClick.addEventListener("click", () => {
    boom.play();
    boom.currentTime = 0;
});

kickClick.addEventListener("click", () => {
    kick.play();
    kick.currentTime = 0;
});
clapClick.addEventListener("click", () => {
    clap.play();
    clap.currentTime = 0;
});
hihatClick.addEventListener("click", () => {
    hihat.play();
    hihat.currentTime = 0;
});
openhatClick.addEventListener("click", () => {
    openhat.play();
    openhat.currentTime = 0;
});
rideClick.addEventListener("click", () => {
    ride.play();
    ride.currentTime = 0;
});
snareClick.addEventListener("click", () => {
    snare.play();
    snare.currentTime = 0;
});
tinkClick.addEventListener("click", () => {
    tink.play();
    tink.currentTime = 0;
});
tomClick.addEventListener("click", () => {
    tom.play();
    tom.currentTime = 0;
});