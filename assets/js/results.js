function restartQuiz() {
    localStorage.clear();
    window.location.href="index.html"
}

const restartQuizButton = document.querySelector('#restart');
//add event listener to restart button
restartQuizButton.addEventListener('click', restartQuiz)

const nickname = document.querySelector('.nickname');
nickname.textContent =localStorage.getItem('nickname');