console.log("script.js connected!");

let questions = document.querySelectorAll(".question-block");
let userAnswers = {}; // empty object for user answers

questions.forEach(function(question){
    let buttons = question.querySelectorAll(".answer-btn");
    buttons.forEach(function(button){
        button.addEventListener("click", function() {
            // Highlight button code
            buttons.forEach(function(btn){
                btn.classList.remove("selected");
            });
            button.classList.add("selected");

            // Gets data for questionid and answer
            let questionID = button.dataset.questionid;
            let response = button.dataset.answer;
            // Stores response data in the userAnswers object
            userAnswers[questionID] = response;
            console.log(userAnswers);
        });
    });
});



/*
let buttons = document.querySelectorAll("#question-block button");
buttons.forEach(function(button){
    button.addEventListener("click", function() {
        buttons.forEach(function(btn) {
            btn.classList.remove("selected");
        });
        button.classList.add("selected");
    });
});*/
