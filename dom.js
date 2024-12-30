
function fnGenerateQuestionForm(isFirstLoad){
    var elem_Form = null;
    if(isFirstLoad===true){
        console.log("generate form");
        elem_Form = document.createElement("form");
        elem_Form.id = "MainForm";
        
        document.getElementsByTagName("main")[0].appendChild(elem_Form);
    }else{
        //reset form
        console.log("reset form");
        elem_Form = document.getElementById("MainForm");
        elem_Form.innerHTML = "";
    }


    for(i=0;i<5;i++){
        elemQuestion = fnGenerateQuestion(isFirstLoad);
        elemQuestion.id = "question-container-" + i;
        elem_Form.appendChild( elemQuestion );
    }
}

function fnGenerateQuestion(isFirstLoad) {
    elemQuestionContainer = document.createElement("div");
    elemQuestionContainer.className = "question-container";

    elemQuestionLabel = document.createElement("label");
    if(isFirstLoad){
        intRandom1 = "OO";
        intRandom2 = "XX";
    }else{
        intRandom1 = getRoundedInteger(11,99);
        while(intRandom1 % 10 === 0){
            intRandom1 = getRoundedInteger(11,99);
        }
        intRandom2 = getRoundedInteger(11,99);
        while(intRandom2 % 10 === 0 || intRandom2 === intRandom1){
            intRandom2 = getRoundedInteger(11,99);
        }
    }
    elemQuestionLabel.innerText = intRandom1 + " + " + intRandom2 + " = ";
    elemQuestionContainer.appendChild(elemQuestionLabel);

    elemQuestionInput = document.createElement("input");
    elemQuestionInput.type = "number";
    fnSetQuestionData(elemQuestionInput, intRandom1, intRandom2);
    elemQuestionContainer.appendChild(elemQuestionInput);

    elemAnswerCorrectOrNot = document.createElement("div");
    elemAnswerCorrectOrNot.className = "answer-mark";
    elemAnswerCorrectOrNot.innerHTML = "";  //reset answer mark
    elemQuestionContainer.appendChild(elemAnswerCorrectOrNot);

    return elemQuestionContainer;
}






function fnGenerateTimer(){
    elem_Container = document.createElement("div");
    elem_Container.className = "timer-container";

    elem_toggleButton = document.createElement("button");
    elem_toggleButton.onclick = fnToggleTimer;
    elem_toggleButton.innerText = ">";
    elem_Container.appendChild(elem_toggleButton);

    elem_Label = document.createElement("label");
    elem_Label.id = "TimerText";
    elem_Label.innerText = "0.0";
    elem_Container.appendChild(elem_Label);

    document.getElementsByTagName("main")[0].appendChild(elem_Container);
}

function fnToggleTimer(){
    timer_stopped = !timer_stopped;
    if(timer_stopped){
        this.innerText = ">";
        fnCheckQuestionAnswers();
        return;
    }

    this.innerText = "||";
    fnUpdateTimerText(0.0);

    fnGenerateQuestionForm(false);
}

// NOTE: timer is slightly slower than actual time, probably due to Decimal Calculation + I/O + UI update
function fnUpdateTimerText(fltSeconds){
    if (timer_stopped === true){
        return;
    }
    
    setTimeout( function(){
        fltSeconds +=0.1;
        fnUpdateTimerText(fltSeconds);

        //put this line last just in case decimal rounding takes more time than expected
        document.getElementById("TimerText").innerText = fltSeconds.toFixed(1);
    }, 100 );

}