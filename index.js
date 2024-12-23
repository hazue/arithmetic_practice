/* vvvvvv DECLARE ALL GLOBAL VARIABLE HERE vvvvvv */
var timer_stopped = true;
/* ^^^^^^ DECLARE ALL GLOBAL VARIABLE HERE ^^^^^^ */


function fnSetQuestionData(elemQuestionInput, intRandom1, intRandom2){
    rawData = {value1:intRandom1, value2:intRandom2, answer:intRandom1+intRandom2};
    elemQuestionInput.questionData = JSON.stringify(rawData);
}

function fnCheckQuestionAnswers(){
    aryElemAllQuestions = document.getElementsByTagName('input');
    intTotalCorrect = 0;

    for(i=0; i<aryElemAllQuestions.length; i++){
        elemQuestion = aryElemAllQuestions[i];
        questionContainer = elemQuestion.parentElement;

        jsonQuestionData = JSON.parse( elemQuestion.questionData );
        intParsedAnswer = parseInt(elemQuestion.value);
        if( intParsedAnswer === jsonQuestionData.answer ){
            questionContainer.getElementsByClassName("answer-mark")[0].innerHTML = "&#x2705;";
        }else{
            questionContainer.getElementsByClassName("answer-mark")[0].innerHTML = "&#x274C;"
        }
    }


}

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