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

// Results
function displayResult(answers){
    let scores = {
        Knight: 0,
        Mage: 0,
        Rogue: 0,
        Ranger: 0,
        Cleric: 0,
        Bard: 0
    };
    let answerValues = Object.values(answers);
    // Question 1 answers
    if (answerValues[0] === "A") {
        scores["Knight"] += 2.1;
        scores["Mage"] += 1;
    } else if (answerValues[0] === "B") {
        scores["Ranger"] += 2.1;
        scores["Bard"] += 1;
    } else if (answerValues[0] === "C") {
        scores["Cleric"] += 2.1;
        scores["Rogue"] += 1;
    } else if (answerValues[0] === "D") {
        scores["Mage"] += 2.1;
        scores["Bard"] += 1;
    }
    // Question 2 answers
    if (answerValues[1] === "A") {
        scores["Knight"] += 2.1;
        scores["Rogue"] += 1;
    } else if (answerValues[1] === "B") {
        scores["Mage"] += 2.1;
        scores["Cleric"] += 1;
    } else if (answerValues[1] === "C") {
        scores["Rogue"] += 2.1;
        scores["Ranger"] += 1;
    } else if (answerValues[1] === "D") {
        scores["Bard"] += 2.1;
        scores["Mage"] += 1;
    }
    // Question 3 answers
    if (answerValues[2] === "A") {
        scores["Cleric"] += 2.1;
        scores["Knight"] += 1;
    } else if (answerValues[2] === "B") {
        scores["Mage"] += 2.1;
        scores["Ranger"] += 1;
    } else if (answerValues[2] === "C") {
        scores["Bard"] += 2.1;
        scores["Knight"] += 1;
    } else if (answerValues[2] === "D") {
        scores["Knight"] += 2.1;
        scores["Bard"] += 1;
    }
    // Questopm 4 answers
    if (answerValues[3] === "A") {
        scores["Ranger"] += 2.1;
        scores["Cleric"] += 1;
    } else if (answerValues[3] === "B") {
        scores["Bard"] += 2.1;
        scores["Ranger"] += 1;
    } else if (answerValues[3] === "C") {
        scores["Cleric"] += 2.1;
        scores["Ranger"] += 1;
    } else if (answerValues[3] === "D") {
        scores["Rogue"] += 2.1;
        scores["Cleric"] += 1;
    }
    // Question 5 answers
    if (answerValues[4] === "A") {
        scores["Mage"] += 2.1;
        scores["Rogue"] += 1;
    } else if (answerValues[4] === "B") {
        scores["Knight"] += 2.1;
        scores["Cleric"] += 1;
    } else if (answerValues[4] === "C") {
        scores["Rogue"] += 2.1;
        scores["Bard"] += 1;
    } else if (answerValues[4] === "D") {
        scores["Ranger"] += 2.1;
        scores["Rogue"] += 1;
    }
    console.log(scores);
    // Finds the highest scored category
    let max = 0;
    let scoreValues = Object.values(scores);
    let scoreKeys = Object.keys(scores);
    let result = "";
    for (let i = 0; i < 6; i++) {
        if (max < scoreValues[i]) {
            max = scoreValues[i];
            result = scoreKeys[i];
        } else if (max === scoreValues[i]) {
            max = scoreValues[i];
            result += " and " + scoreKeys[i];
        }
    }
    // Updates output
    let output = document.getElementById("result-container");
    output.style.display = "block";
    let outputp = document.getElementById("result-text");
    outputp.textContent = result;
};
// Event listener for the show results button
let showResult = document.getElementById("show-result");
showResult.addEventListener("click", function() {
    displayResult(userAnswers);
});