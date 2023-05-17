//variables

const startStopBtn = document.querySelector("#start-btn");
const resetBtn = document.querySelector("#reset");

//Time values

let seconds = 0;
let minutes = 0;
let hours = 0;

//Laeding zeros

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//Btn-action variables

let timerStatus = "stopped";
let timerInterval = null;


//Stop-watch function

function stopWatch(){
    seconds++

    if(seconds / 60 === 1){
        seconds = 0;
        minutes++

        if(minutes / 60 === 1){
            minutes = 0;
            hours++
        }
    }

    if(leadingSeconds < 9){
        leadingSeconds = "0" + seconds.toString();
    }else{
        leadingSeconds = seconds;
    }

    if(leadingMinutes < 9){
        leadingMinutes = "0" + minutes.toString();
    }else{
        leadingMinutes = minutes;
    }

    if(leadingHours < 9){
        leadingHours = "0" + hours.toString();
    }else{
        leadingHours = hours;
    }

    let displayTimer = document.getElementById("timer").innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

startStopBtn.addEventListener("click", function(){

    if(timerStatus === "stopped"){
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById("start-btn").innerHTML = "<i id='pause' class='fa-solid fa-pause'></i>";
        timerStatus = "start";
    }else{
        window.clearInterval(timerInterval);
        document.getElementById("start-btn").innerHTML = "<i id='play' class='fa-solid fa-play'></i>";
        timerStatus = "stopped";
    }
});

resetBtn.addEventListener("click", function(){

    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.getElementById("timer").innerHTML = "00:00:00";
});

