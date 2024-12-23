
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
        elem_Form.appendChild( fnGenerateQuestion(isFirstLoad) );
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
        intRandom2 = getRoundedInteger(11,99);
    }
    elemQuestionLabel.innerText = intRandom1 + " + " + intRandom2 + " = ";
    elemQuestionContainer.appendChild(elemQuestionLabel);

    elemQuestionInput = document.createElement("input");
    elemQuestionInput.type = "text";
    elemQuestionContainer.appendChild(elemQuestionInput);

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
        return
    }

    this.innerText = "||";
    fnUpdateTimerText(0.0);

    fnGenerateQuestionForm(false);
}

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