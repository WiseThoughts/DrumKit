const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hiHat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openHat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

const boomS = new Audio("./sounds/boom.wav");
const clapS = new Audio("./sounds/clap.wav");
const hiHatS = new Audio("./sounds/hihat.wav");
const kickS = new Audio("./sounds/kick.wav");
const openHatS = new Audio("./sounds/openhat.wav");
const rideS = new Audio("./sounds/ride.wav");
const snareS = new Audio("./sounds/snare.wav");
const tinkS = new Audio("./sounds/tink.wav");
const tomS = new Audio("./sounds/tom.wav");


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
        },150);
}


boom.addEventListener('click', () => {
    boomS.pause();
    boomS.currentTime = 0;
    boomS.play();
    let activeButton = boom
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },150);
})
clap.addEventListener('click', () => {
    clapS.play();
    clapS.currentTime = 0;
    let activeButton = clap
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },150);
})
hiHat.addEventListener('click', () => {
    hiHatS.play();
    hiHatS.currentTime = 0;
    let activeButton = hiHat
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },150);
})
kick.addEventListener('click', () => {
    kickS.play();
    kickS.currentTime = 0;
    let activeButton = kick
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },150);
})
openHat.addEventListener('click', () => {
    openHatS.play();
    openHatS.currentTime = 0;
    let activeButton = openHat
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },150);
})
ride.addEventListener('click', () => {
    rideS.play();
    rideS.currentTime = 0;
    let activeButton = ride
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },150);
})
snare.addEventListener('click', () => {
    snareS.play();
    snareS.currentTime = 0;
    let activeButton = snare
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },150);
})
tink.addEventListener("click", () => {
    tinkS.play();
    tinkS.currentTime = 0;
    let activeButton = tink
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },150);
})
tom.addEventListener('click', () => {
    console.log("tom")
    tomS.pause();
    tomS.currentTime = 0;
    tomS.play();
    let activeButton = tom
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },150);
})







//This is what I tried first and wanted to get working but couldn't



// let numberOfButtons = document.querySelectorAll(".drum").length;

// for (let i=0; i<numberOfButtons; i++){
//     let drum = document.getElementById("drums")[i].addEventListener("click", function(e){
//         const text = Element.innerHTML;
//         console.log(text)
//         makeSound(text)
//         buttonAnimation(text);
//     })
// };


// document.addEventListener("keypress", function(e){
//     makeSound(e.key);
//     buttonAnimation(e.key);
// });


// function makeSound(key){
//     switch(key){
//     case "q":
//         let boom=new Audio("sounds/boom.wav");
//         boom.pause();
//         boom.currentTime = 0;
//         boom.play();
//         break;
//     case "w":
//         let clap=new Audio("sounds/clap.wav");
//         clap.pause();
//         clap.currentTime = 0;
//         clap.play();
//         break;
//     case "e":
//         let hiHat=new Audio("sounds/hihat.wav");
//         hiHat.pause();
//         hiHat.currentTime = 0;
//         hiHat.play();
//         break;
//     case "r":
//         let kick=new Audio("sounds/kick.wav");
//         kick.pause();
//         kick.currentTime = 0;
//         kick.play();
//         break;
//     case "t":
//         let openHat=new Audio("sounds/openhat.wav");
//         openHat.pause();
//         openHat.currentTime = 0;
//         openHat.play();
//         break;
//     case "a":
//         let ride=new Audio("sounds/ride.wav");
//         ride.pause();
//         ride.currentTime = 0;
//         ride.play();
//         break;
//     case "s":
//         let snare=new Audio("sounds/snare.wav");
//         snare.pause();
//         snare.currentTime = 0;
//         snare.play();
//         break;
//     case "d":
//         let tink=new Audio("sounds/tink.wav");
//         tink.pause();
//         tink.currentTime = 0;
//         tink.play();
//         break;
//     case "f":
//         let tom=new Audio("sounds/tom.wav");
//         tom.pause();
//         tom.currentTime = 0;
//         tom.play();
//         break;
//     default:console.log(key)
//     }
// }


// function buttonAnimation(currentKey){
//     let activeButton=document.querySelector("."+currentKey);
//         activeButton.classList.add("pressed");
//         setTimeout(function(){
//             activeButton.classList.remove("pressed");
//         },150);
// }