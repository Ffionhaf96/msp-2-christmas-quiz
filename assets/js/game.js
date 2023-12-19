// TODOs

// 1. [X] Create a function that will start the quiz
// 2. [X] Create a function that will end the quiz
// 3. [] Create a function that will check the answers
// 4. [] Create a function that will display the results
// 5. [X] Create a function that will display the questions
// 6. [X] Ceate a function that will display the timer
// 7. [] Create a function that will display the high scores
// 8. [] Create a function that will clear the high scores
// 9. [] Create a function that will store the high scores

function showName() {
    // TODO: Show current players name

}

function restartQuiz() {
    localStorage.clear();
    window.location.href="index.html"
}

const restartQuizButton = document.querySelector('#restart');
//add event listener to restart button
restartQuizButton.addEventListener('click', restartQuiz)

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
        // return the quiz data
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

async function showQuestion(index) {
    const data = await getQuiz();
    
    const question = data.questions[index];

    // if no more questions in JSON move on to results page
    if (!question) {
        console.error("We ran out of questions. Quiz ended.")
        return window.location.href = 'results.html';
    }
    const levelNumber = document.querySelector('.level-number');
    levelNumber.textContent = `Round ${index+1} / 5`;
    index++;
    const choices = question.choices;
    console.debug(question);

    // get the elements to replace data
    const questionSection = document.getElementById('question');

    // change the textContent with the question
    questionSection.textContent = question.question;

    // Select all <li> elements inside the <ol>
    const listItems = document.querySelectorAll('ol > li');

    // Iterate over each <li> element
    listItems.forEach((item, index) => {
        // Check if the corresponding array element exists to avoid errors
        if (choices[index]) {
            // Set the textContent of the <li> element to the corresponding array element
            item.textContent = choices[index];
        }
    });
    // start a brand new timer for fresh question
    startTimer();
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
            // Player has ran out of time
            // Pick the last selected item in the list and move player to next question
            handleSubmitAnswer();
        }
        // Update every 10 milliseconds
    }, 10);

}

const listItems = document.querySelectorAll('main ol li');
// Function to handle the click event
function handleListItemClick(event) {
    // Remove 'selected' class from all list items
    listItems.forEach(li => li.classList.remove('selected'));
    
    // Add 'selected' class to the clicked item
    event.target.classList.add('selected');
    
    // Save the value of the answer
    const clickedIndex = Array.from(listItems).indexOf(event.target);
    localStorage.setItem('selectedListItem', clickedIndex);
};
// Add event listeners to each list item
listItems.forEach((li, index) => {
    li.addEventListener('click', handleListItemClick);
});

const savedIndex = localStorage.getItem('selectedListItem');
// check if there is a saved index in range and if so apply the selected class
if (savedIndex !== null && listItems[savedIndex]) {
    listItems[savedIndex].classList.add('selected');
}

function handleSubmitAnswer() {
    // get answer array from localStorage if it exists otherwise make a new one 
    // using nullish coalescing operator https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
    let answers = JSON.parse(localStorage.getItem('chosenAnswers')) ?? Array();

    
    const currentSelectedAnswerIndex = localStorage.getItem('selectedListItem');
    if (answers.length <= index){
        const answerValue = Array.from(listItems)[currentSelectedAnswerIndex].textContent;
        answers.push(answerValue);
        localStorage.setItem('chosenAnswers', JSON.stringify(answers))
    }

    // increment question index and set it in localStorage
    let nextQuestion = ++index;
    console.log(`Next Q ${nextQuestion}`);
    localStorage.setItem('currentQuestion', nextQuestion)

    showQuestion(nextQuestion);

    
}

const submitAnswer = document.querySelector('.submit-answer');
//add event listener to submit answer button
submitAnswer.addEventListener('click', handleSubmitAnswer)

// check the app is even starting
console.debug("app start")

// Get the current question local storage 
let index = localStorage.getItem('currentQuestion') ?? 0;
showQuestion(index)


// Path: msp-2-christmas-quiz/assets/js/script.js
