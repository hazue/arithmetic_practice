function getRoundedInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function addQuestion(elemForm) {
    elemQuestionContainer = document.createElement("div");
    elemQuestionContainer.className = "question-container";

    elemQuestionLabel = document.createElement("label");
    intRandom1 = getRoundedInteger(11,99);
    intRandom2 = getRoundedInteger(11,99);
    elemQuestionLabel.innerText = intRandom1 + " + " + intRandom2 + " = ";
    elemQuestionContainer.appendChild(elemQuestionLabel);

    elemQuestionInput = document.createElement("input");
    elemQuestionInput.type = "text";
    elemQuestionContainer.appendChild(elemQuestionInput);

    elemForm.appendChild(elemQuestionContainer);
    
}

var timer_stopped = false;
function timerCounting(intSeconds){
    if (timer_stopped === true){
        return;
    }

    setTimeout( function(){
        intSeconds++;
        document.getElementById("timer").innerText = intSeconds;
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