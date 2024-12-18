/* vvvvvv DECLARE ALL GLOBAL VARIABLE HERE vvvvvv */
var timer_stopped = false;
/* ^^^^^^ DECLARE ALL GLOBAL VARIABLE HERE ^^^^^^ */



function timerCounting(intSeconds){
    if (timer_stopped === true){
        return;
    }

    setTimeout( function(){
        intSeconds++;
        updateTimerText(intSeconds);
        timerCounting(intSeconds);
    }, 1000 );
}

function stopTimer(){
    timer_stopped = true;
}

function main(){
    elem_Main = document.getElementsByTagName("main")[0];
    elem_Form = document.createElement("form");
    elem_Main.appendChild(elem_Form);

    for(i=0;i<5;i++){
        addQuestion(elem_Form);
    }

}


document.body.onload = function(){
    setTimeout( function(){
        main();
    }, 100);
}

console.log("index.js loaded");