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

function main(){
    elem_Main = document.getElementsByTagName("main")[0];
    elem_Form = document.createElement("form");
    elem_Main.appendChild(elem_Form);
    addQuestion(elem_Main);
}


document.onload = function(){
    console.log("onload");
    setTimeout( function(){
        console.log("setTimeout");
        main();
    }, 1000);
}

console.log("index.js loaded?");