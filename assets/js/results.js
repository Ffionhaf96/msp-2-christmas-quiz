function restartQuiz() {
    localStorage.clear();
    window.location.href="index.html"
}

const restartQuizButton = document.querySelector('#restart');
//add event listener to restart button
restartQuizButton.addEventListener('click', restartQuiz)

const nickname = document.querySelector('.nickname');
nickname.textContent =localStorage.getItem('nickname');


async function calculateResults() {
    // initialise score
    let score = 0;
    try {
        const response = await fetch('assets/questions/questions.json');
        if (!response.ok) {
            // We couldn't get the quiz JSON
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // wait for response and access JSON from file
        const data = await response.json();
        // return the quiz data
        const chosenAnswers = JSON.parse(localStorage.getItem('chosenAnswers'));
        
       data.questions.forEach((quest, index) => {
            if (quest.answer == chosenAnswers[index]) {
                ++score;
            }
       });
       document.querySelector('#score').textContent = `Wow you scored ${score} / 5`;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

calculateResults();