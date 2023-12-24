async function getQuestionData() {
    try {
        const response = await fetch('assets/questions/questions.json');
        if (!response.ok) {
            // We couldn't get the quiz JSON
            console.log(`HTTP error! Status: ${response.status}`);
        }
        // wait for response and access JSON from file
        return await response.json();
    } catch (error) {
        console.log(`Couldn't fetch the quiz data - ${error}`);
        return error;
    }
}

/**
 * Resets the quiz state and redirects the user to the start page.
 * This function clears all quiz-related data stored in the browser's local storage
 * and navigates the user back to the initial quiz page (index.html).
 *
 * @function restartQuiz
 * Side effects:
 * - Clears the entire local storage, removing all stored data for the domain.
 * - Changes the current location of the window, causing a redirection to 'index.html'.
 * Preconditions:
 * - The function assumes that quiz-related data is stored in the browser's local storage.
 * - There is an 'index.html' file at the root of the website to redirect to.
 * Postconditions:
 * - The browser's local storage is cleared.
 * - The user is redirected to the 'index.html' page to restart the quiz.
 */
function restartQuiz() {
    localStorage.clear();
    window.location.href = "index.html"
}
function restartQuiz() {
    localStorage.clear();
    window.location.href = "index.html"
}

const restartQuizButton = document.querySelector('#restart');
//add event listener to restart button
restartQuizButton.addEventListener('click', restartQuiz)

const teaser = document.querySelector('.teaser');
const avatar = localStorage.getItem('avatar');
teaser.textContent = `How well do you know Christmas... ${avatar} ${localStorage.getItem('nickname')} ${avatar}?!`;


async function calculateResults() {
    // initialise score
    let score = 0;
    const chosenAnswers = JSON.parse(localStorage.getItem('chosenAnswers'));

    const questionData = await getQuestionData();
    const questions = questionData.questions;
    console.log(questions);
    // loop over each question and check if answers match
    questions.forEach((quest, index) => {
        if (quest.answer == chosenAnswers[index]) {
            ++score;
        }
    });

    const questionLength = questions.length;
    // calculate score percentage
    const scorePercentage = (score / questionLength) * 100;
    const resultCategory = await getResultCategory(scorePercentage);
    console.log(resultCategory);
    // set all the result category properties
    document.querySelector('.title').textContent = `You are a ${resultCategory.title}`;
    document.querySelector('.description').textContent = resultCategory.description;
    const categoryImage = document.querySelector('.category-image');
    categoryImage.src = `./assets/images/${resultCategory.image}`;
    categoryImage.setAttribute("alt", resultCategory.alt);
    document.querySelector('.suggestion').textContent = resultCategory.suggestion;
    // show score in score element
    document.querySelector('#score').textContent = `You scored ${score} / ${questionLength}`;
}

async function getResultCategory(scorePercentage) {
    const questionData = await getQuestionData();
    const resultCategories = questionData.resultCategories;
    console.log(resultCategories);
    let index = 0;
    if (scorePercentage == 0) {
        return resultCategories[index];
    }
    else if (scorePercentage <= 20) {
        return resultCategories[++index];
    } else if (scorePercentage <= 40) {
        return resultCategories[++index];
    } else if (scorePercentage <= 60) {
        return resultCategories[++index];
    } else if (scorePercentage <= 80) {
        return resultCategories[++index];
    } else if (scorePercentage <= 100) {
        return resultCategories[++index];
    }
}

calculateResults();
