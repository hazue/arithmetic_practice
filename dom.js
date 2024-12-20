function generateTimer(){
    elem_Container = document.createElement("div");
    elem_Container.className = "timer-container";

    elem_toggleButton = document.createElement("button");
    elem_toggleButton.innerText = ">";
    elem_Container.appendChild(elem_toggleButton);

    elem_Label = document.createElement("label");
    elem_Label.innerText = "0.0";
    elem_Container.appendChild(elem_Label);

    return elem_Container;
}

function generateQuestionForm(){
    elem_Form = document.createElement("form");

    for(i=0;i<5;i++){
        elem_Form.appendChild( generateQuestion() );
    }

    return elem_Form;
}

function generateQuestion() {
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

    return elemQuestionContainer;
}

function updateTimerText(intSeconds){
    document.getElementById("timer").innerText = intSeconds;
}