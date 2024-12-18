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

function updateTimerText(intSeconds){
    document.getElementById("timer").innerText = intSeconds;
}