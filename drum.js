let numberOfButtons = document.querySelectorAll(".drum").length;
let drum = document.querySelectorAll(".drum");


// for (let i=0; i<numberOfButtons; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(e){
//         let buttonInnerHTML=this.innerHTML;
//         makeSound(buttonInnerHTML);
//         buttonAnimation(buttonInnerHTML);
//     });
// };


// for (let i=0; i<drum.length; i++){
//     drum[i].addEventListener("click", drumClick)
// }

// const drumClick = (e)=>{
//     let innerHTML = e.target.innerHTML;
//     buttonAnimation(innerHTML)
//     makeSound(innerHTML)
// }

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