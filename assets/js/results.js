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

function restartQuiz() {
    localStorage.clear();
    window.location.href = "index.html"
}

const restartQuizButton = document.querySelector('#restart');
//add event listener to restart button
restartQuizButton.addEventListener('click', restartQuiz)

const teaser = document.querySelector('.teaser');
teaser.textContent = `How well do you know Christmas... ${localStorage.getItem('nickname')}?!`;


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
    if (scorePercentage == 0){
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
