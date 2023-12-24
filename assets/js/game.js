
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
  window.location.href="index.html"
}

const restartQuizButton = document.querySelector('#restart');
//add event listener to restart button
restartQuizButton.addEventListener('click', restartQuiz);

/**
* Fetches quiz data from a specified JSON file located in the 'assets/questions' directory.
* This function attempts to retrieve the quiz data asynchronously using the Fetch API.
* If successful, it returns the parsed JSON data. If not, it logs the error to the console.
*
* @async
* @function getQuiz
* @returns {Promise<Object>|undefined} 
* The quiz data as a JavaScript object if the fetch is successful;
* otherwise, `undefined` if an error occurs.
* Uses:
* - The `fetch` API to request the quiz data from a JSON file.
* - The `Response.json` method to parse the response body as JSON.
* Side effects:
* - Logs a to the console if the fetch request fails or if the response is not OK.
* - Throws an error with the response status if the fetch is unsuccessful.
* Preconditions:
* - The 'assets/questions/questions.json' file must exist and be accessible.
* - The server hosting the file must be running and allow fetch requests.
* Postconditions:
* - Returns the quiz data as an object if the fetch is successful.
* - Returns `undefined` and logs an error if the fetch fails.
*/
async function getQuiz() {
  try {
      const response = await fetch('assets/questions/questions.json');
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.log('Fetch error:', error);
  }
}

let timerId = null; //initialize timerId for setInterval

const listItems = document.querySelectorAll('main ol li');

/**
* Displays the specified question from the quiz data to the user and updates the UI accordingly.
* It fetches the quiz data, updates the question and choices on the page,
* and handles the end of the quiz when there are no more questions.
*
* @async
* @function showQuestion
* @param {number} index - The index of the question to show from the quiz data.
* Uses:
* - `getQuiz` to fetch the quiz data asynchronously.
* - DOM manipulation methods to update the question and choices on the page.
* Side effects:
* - Logs an error and redirects to the results page if there are no more questions.
* - Updates the text content of various elements to reflect the current question and choices.
* - Starts a new timer for the current question.
* Preconditions:
* - The `getQuiz` function should return an object with a `questions` array.
* - The HTML should contain elements with the correct selectors used in the function.
* - The `startTimer` function should be defined and handle the countdown for each question.
*/
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

  // get the elements to replace data
  const questionSection = document.querySelector('#quiz-question h2');

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


/**
* Initializes and starts a countdown timer on the page.
* The timer counts down from 10 seconds in 1-second intervals,
* updating the display and eventually handling the end of the countdown.
*
* @async
* @function startTimer
* @global
* @var {number} startTime - The start time in milliseconds (10000ms = 10s).
* @var {Element} timerElement - The DOM element where the time is displayed.
* @var {number} timerId - The ID of the interval timer, used to clear it.
* Uses:
* - `document.querySelector` to access the timer display element.
* - `setInterval` to create a countdown effect.
* - `clearInterval` to stop the countdown when it reaches 0 or the function is called again.
* - `handleSubmitAnswer` to handle the end of the countdown.
* Side effects:
* - Updates the text content of the timerElement every second.
* - Clears any existing intervals when called.
* - Triggers handleSubmitAnswer when the countdown finishes.
*/
async function startTimer() {
  let startTime = 10000;
  //get the timer text element
  const timerElement = document.querySelector('#timer .time-text');
  timerElement.textContent = 10;
  if (timerId) {
      clearInterval(timerId);
  }
  
  timerId = setInterval(() => {
      // Decrement the time by 1
      startTime -= 1000;
      // Convert to seconds and format to 2 decimal places
      const seconds = (startTime / 1000);

      timerElement.textContent = seconds > 0 ? seconds : '0';

      // stop the time
      if (startTime <= 0) {
          clearInterval(timerId);
          // Player has ran out of time
          // Pick the last selected item in the list and move player to next question
          if (!localStorage.getItem('selectedListItem')){
              localStorage.setItem('selectedListItem', 0);
          }
          handleSubmitAnswer();
      }
      // Update every second
  }, 1000);

}


/**
* Handles click events on list items in the quiz interface.
* When a list item is clicked, this function removes the 'selected' class from all list items,
* adds the 'selected' class to the clicked item, and saves the index of the clicked item
* to the browser's local storage under the key 'selectedListItem'.
*
* @function handleListItemClick
* @param {Event} event - The click event object that triggered the function.
* Uses:
* - The `forEach` method to iterate over all list items and remove the 'selected' class.
* - The `classList` property to add the 'selected' class to the clicked item.
* - The `localStorage.setItem` method to save the index of the selected item.
* Preconditions:
* - Assumes the existence of a `listItems` collection representing all list items in the quiz.
* - Expects to be attached as an event listener to each list item.
* Side effects:
* - Modifies the class list of list items in the DOM, visually indicating the selected item.
* - Saves data to the browser's local storage, which persists across page reloads.
* - Depends on the structure of the DOM and will fail if the expected elements are not present.
*/
function handleListItemClick(event) {
  listItems.forEach(li => li.classList.remove('selected'));
  event.target.classList.add('selected');
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

/**
* Handles the submission of the currently selected answer in the quiz.
* It retrieves the selected answer from local storage, updates the answers array,
* increments the question index, and moves on to the next question.
* If there's no currently selected answer, it doesn't update the answers array.
*
* @function handleSubmitAnswer
* Uses:
* - `localStorage.getItem` and `localStorage.setItem` to retrieve and store data in local storage.
* - `JSON.parse` and `JSON.stringify` to handle the conversion between a JavaScript array and a string.
* - `Array.from` to create an array from the listItems NodeList.
* Side effects:
* - Updates the 'chosenAnswers' and 'currentQuestion' values in local storage.
* - Logs the index of the next question to the console.
* - Calls `showQuestion` to display the next question.
* Preconditions:
* - Assumes that 'selectedListItem' and 'currentQuestion' are keys in local storage representing the index of the currently selected answer and the current question, respectively.
* - Assumes the existence of a `listItems` collection representing all list items in the quiz.
* - The `showQuestion` function must be defined and handle the display of questions.
* Postconditions:
* - Updates the 'chosenAnswers' array in local storage with the selected answer.
* - Increments the 'currentQuestion' index in local storage.
* - Displays the next question using the `showQuestion` function.
* Notes:
* - The function assumes the answers are text content from the list items.
* - It uses nullish coalescing to provide a default value for the answers array if it doesn't exist in local storage.
*/
function handleSubmitAnswer() {
  let answers = JSON.parse(localStorage.getItem('chosenAnswers')) ?? [];
  const currentSelectedAnswerIndex = localStorage.getItem('selectedListItem');
  if (answers.length <= index){
      const answerValue = Array.from(listItems)[currentSelectedAnswerIndex].textContent;
      answers.push(answerValue);
      localStorage.setItem('chosenAnswers', JSON.stringify(answers));
  }

  let nextQuestion = ++index;
  localStorage.setItem('currentQuestion', nextQuestion);

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
