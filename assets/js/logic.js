// TODOs

// 1. [] Create a function that will start the quiz
// 2. [] Create a function that will end the quiz
// 3. [] Create a function that will check the answers
// 4. [] Create a function that will display the results
// 5. [-] Create a function that will display the questions
// 6. [X] Create a function that will display the timer
// 7. [] Create a function that will display the high scores
// 8. [] Create a function that will clear the high scores
// 9. [] Create a function that will store the high scores

async function getQuiz() {
    // use `fetch()` to get the questions from `assets/questions/questions.js` https://developer.mozilla.org/docs/Web/API/fetch
    try {
        const response = await fetch('assets/questions/questions.json');
        if (!response.ok) {
            // TODO: Let the user see that we couldn't get the quiz
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // wait for response and access JSON from file
        const data = await response.json();
        // check in console we got good data
        console.debug(data)
        // return the quiz data
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

async function showQuestions() {
    const data = await getQuiz();

    // TODO: iterate over all the questions
    //get the first question
    const firstQuestion = data.questions[0];

    // get the elements to replace data
    const questionSection = document.getElementById('question');
    const choicesList = document.querySelector('main ol');

    // change the innerHTML with the question
    questionSection.innerHTML = `<p>${firstQuestion.question}</p>`;

    //build the html for the choices matching to the question
    const choicesHTML = firstQuestion.choices.map(choice => `<li>${choice}</li>`).join('');

    // repalce the html using innerHTML
    choicesList.innerHTML = choicesHTML;

}


async function startTimer() {

    //get the timer text element
    const timerElement = document.querySelector('#timer .time-text');
    // 10 seconds in ms
    let startTime = 10000;


    // use setInterval so we can update the question countdown clock to build tension https://developer.mozilla.org/docs/Web/API/setInterval
    const interval = setInterval(() => {
        // Decrement the time by 10 milliseconds
        startTime -= 10;
        // Convert to seconds and format to 2 decimal places
        const seconds = (startTime / 1000).toFixed(2);

        // Update the display with ternary operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
        timerElement.textContent = seconds > 0 ? seconds : '0.00';

        // stop the time
        if (startTime <= 0) {
            clearInterval(interval);
        }
        // Update every 10 milliseconds
    }, 10);

}



showQuestions();
startTimer();

// Path: msp-2-christmas-quiz/assets/js/script.js