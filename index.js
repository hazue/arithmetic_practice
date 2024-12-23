/* vvvvvv DECLARE ALL GLOBAL VARIABLE HERE vvvvvv */
var timer_stopped = true;
/* ^^^^^^ DECLARE ALL GLOBAL VARIABLE HERE ^^^^^^ */

function main(){
    fnGenerateQuestionForm(true);   //generate this first so it'll always be on top of Timer
    fnGenerateTimer();
}


document.body.onload = function(){
    setTimeout( function(){
        main();
    }, 100);
}

console.log("index.js loaded");