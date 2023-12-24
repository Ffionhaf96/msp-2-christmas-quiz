# The Christmas Quiz

![Mock-up]()

#### **By Ffion Haf Edwards**
[Click here to view the live web application]()

This is the testing documentation for my web application: The Christmas Quiz. 

[Full README available here](README.md)

- - -
## Table of Contents
<!--> will insert TOC once document is completed <-->

## Introduction
Welcome to the testing documentation for "The Christmas Quiz". This document provides a comprehensive overview of the various testing methods and procedures employed to ensure the web application is robust, user-friendly, and functions seamlessly across a range of devices and browsers.

The primary objective of these tests is to guarantee that "The Christmas Quiz" delivers an engaging, interactive, and error-free experience to users, aligning with the project’s goals of educational entertainment and festive enjoyment. The testing process covers a multitude of aspects including functionality, usability, responsiveness, compatibility, and performance.

Each section of this documentation details specific tests conducted, methodologies used, outcomes observed, and any actions taken to address issues or enhance the user experience. By rigorously testing the application, high standards of quality and reliability were upheld, ensuring that "The Christmas Quiz" stands out as a premier choice for users seeking festive-themed interactive content. All the test results detailed below are based on the [deployed site]().

## Automated Checks and Validation

### HTML Validation

I subjected the HTML code of all the pages to validation using the [W3C HTML Validator](https://validator.w3.org/nu/).

#### **Errors**

<details><summary>Bad value for button attribute role on li</summary>
<img src="./docs/images/testing/validation/html-validator-bad-value-button-role.png">
</details>

#### **HTML Validation Post-Fix**

<details><summary>HTML Validation index.html</summary>
<img src="/docs/images/testing/validation/html-validator-no-error-index.png">
</details>

<details><summary>HTML Validation game.html</summary>
<img src="/docs/images/testing/validation/html-validator-no-error-game.png">
</details>

<details><summary>HTML Validation results.html</summary>
<img src="/docs/images/testing/validation/html-validator-no-error-results.png">
</details>

### CSS Validation

I validated all CSS code in `style.css` using [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input). 


#### **CSS Validation Result**

No validation errors were found. This is likely because VSCode has a [built-in CSS linter](https://code.visualstudio.com/docs/languages/css#_syntax-verification-linting)

<details><summary>CSS Jigsaw Validation Final Results</summary>
<img src="./docs/images/testing/validation/jigsaw-no-error.png">
</details>


### JavaScript Validation
I used two methods to validate the JavaScript written. Firstly I used ESLint as it is the preffered industry standard for modern JavaScript linting and [integrates into VSCode via the ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) which gives feedback on JavaScript issues in real-time.

[A comparison in package downloads](https://npmcharts.com/compare/jshint,eslint) shows that ESLint has ~32M downloads whereas JSHint has ~400K for the same period. 

<details><summary>Microsoft itself even shows the JSLint extension for VSCode as deprecated</summary>
<img src="./docs/images/testing/validation/JSHint-deprecated.png">
</details>

For the ESlint VSCode extension I used [AirBnB's Javascript Style Guide](https://github.com/airbnb/javascript) to adhere to good JavaScript practices. This can be seen in the `./assets/js/.eslintrc.js` file. Many issues were automatically flagged and fixed using this such as [no-use-before-define](https://eslint.org/docs/latest/rules/no-use-before-define) errors where I was calling a function before defining it.

Nevertheless, I also subjected the JavaScript code of all the pages to validation using [JSHint](https://jshint.com/) as it was used in previous course example case studies.


<!--> Insert details of any errors or warnings here <-->
#### **JavaScript Validation Pre-Fix**
<details><summary>Missing semicolons in all 3 files</summary>
There were missing semicolons in all my JS files.
<img src="./docs/images/testing/validation/es-lint-missing-semis.png">
</details>

<details><summary>Unused variables in loop forEach loops</summary>
In my forEach loops I was referencing an unused index in two occassions.
<img src="./docs/images/testing/validation/es-lint-indexjs-no-unused-vars.png">
</details>

<details><summary>JSHint dot notation</summary>
JSHint picked up on a better style for accessing a property of an element.
<img src="./docs/images/testing/validation/js-hint-index.png">
</details>

#### **JavaScript Validation Post-Fix**

<details><summary>JavaScript Validation Final Index</summary>
<img src="./docs/images/testing/validation/js-hint-index.png">
</details>

<details><summary>JavaScript Validation Final Results</summary>
<img src="./docs/images/testing/validation/js-hint-game.png">
</details>

<details><summary>JavaScript Validation Final Results</summary>
<img src="./docs/images/testing/validation/js-hint-results.png">
</details>


### Accessibility

I ran the site through the [Wave Web Accessibility Evaulation Tool](https://wave.webaim.org/). You can [view the full report for the Christmas Quiz site](https://wave.webaim.org/report#/https://ffionhaf96.github.io/msp-2-christmas-quiz/) I created but I have also included key aspects of the report below.

#### Summary
No error were found and I encountered 4 alerts on initial testing, headers not using <hX> element and suspicious alt text which have been rectified. Manual testing was still encouraged by the WAVE tool.

#### **Accessibility Errors**

#### Possible headings alerts
As mentioned in the summary - 4 alerts were found with citing 3 possible headings that were not using heading elements. 

<details><summary>Possible headings alert</summary>
<img src="./docs/images/testing/accessibility/WAVE-game-possible-heading-no-heading-element.png">
</details>

#### Suspicious alt text alert on results page
The last alert was aruond suspicious alt text for the images provided on the results page which was rectified by supplying unique alt text for each image via the `alt` key in the `resultsCategory` array in `questions.json`

<details><summary>Suspicious alt text in results.html</summary>
<img src="./docs/images/testing/accessibility/WAVE-suspicious-alt-text.png">
</details>

#### Contrast error found in Firefox devtools
Early in development in the `timer` section of the I was using white text on a bright yellow background which failed WCAG standards for accessible text. 
<details><summary>Failed accessible text</summary>
<img src="./docs/images/testing/accessibility/WCAG-contrast-failure.png">
</details>
This was then amended to use a dark green from the sites color pallete which passes the contrast test.
<details><summary>Passing accessible text</summary>
<img src="./docs/images/testing/accessibility/WCAG-contrast-fixed-passing.png">
</details>

#### **Wave Web Accessibility Results Post-Fix**

<details><summary>Wave Web Accessibility Final Results index.html</summary>
<img src="./docs/images/testing/accessibility/WAVE-index-final.png">
</details>

<details><summary>Wave Web Accessibility Final Results  game.html</summary>
<img src="./docs/images/testing/accessibility/WAVE-game-final.png">
</details>

<details><summary>Wave Web Accessibility Final Results results.html</summary>
<img src="./docs/images/testing/accessibility/WAVE-results-final.png">
</details>


### Performance
I utilized Google Chrome Dev Tools' Lighthouse to assess the performance of the site.


#### **Lighthouse Results**
All metrics on the Lighthouse scores for both mobile and desktop reached at minimum the green band with many pages reaching 100.
<details><summary>Performance Emulation</summary>
All Mobile benchmarks in Chrome Dev Tool's Lighthouse were ran emulating a Moto G Power smartphone using Chromium 120.0.0.0 and a slow 4G network connection.
<img src="/docs/images/testing/performance/lighthose-mobile-simulated-env.png">
Desktop benchmarks did not have any emualtion applied.
</details>


<details><summary>Home Page</summary>
As this was the simplest page it was not particularly difficult to achieve a 100 lighthouse score. There is no data being fetched nor is there any big LCP or CLS to be concerned about because there is no dynamic elements.

*Home Page - Desktop*

<img src="/docs/images/testing/performance/lighthouse-desktop-100.png">

*Home Page - Mobile*

<img src="/docs/images/testing/performance/lighthouse-mobile-100.png">

</details>

<details><summary>Game Page</summary>

*Game Page - Desktop*

<img src="/docs/images/testing/performance/lighthouse-desktop-game-99.png">

*Game Page - Mobile*

<img src="/docs/images/testing/performance/lighthouse-mobile-game-94.png">

</details>

<details><summary>Results Page</summary>

*Results Page - Desktop*

<img src="/docs/images/testing/performance/lighthouse-desktop-results-100.png">

*Results Page - Mobile*

<img src="/docs/images/testing/performance/lighthouse-mobile-results-91.png">


</details>

<details><summary>404</summary>
<img src="">

*404 - Desktop*

<img src="">

*404 - Mobile*

<img src="">

</details>


## Manual Testing
### Testing User Stories

I conducted tests on the site in alignment with my defined user stories:

| No. | User Goal                   | How is it achieved?                                        |
|-----|-----------------------------|------------------------------------------------------------|
| 1   | Discover Festive Knowledge  | Participate in an online quiz to learn about Christmas traditions, history, and fun facts. |
| 2   | Engaging Visual Content     | View festive-themed images and graphics and colours throughout the quiz. |
| 3   | Understanding Quiz Results  | See a summary of quiz results to understand Christmas knowledge and preferences. |
| 4   | Multi-Device Accessibility  | Access the quiz on any device, ensuring a seamless experience. |
| 5   | Ease of Navigation          | Navigate the site easily, with a user-friendly interface for the quiz and additional content. |


**Screen Recordings/ Screenshots of User Stories**

<details><summary>User Story 1: Discover Festive Knowledge</summary>
<img src="./docs/images/testing/user-stories/discover-festive-knowledge.png">
</details>

s<details><summary>User Story 2: Engaging Visual Content</summary>
A summary of the results includes christmas themed images generated using OpenAI's DALL-E v3.
<img src="./docs/images/testing/user-stories/engaging-content.jpeg">
Fun Christmas emojis can be chosen as an avatar for the Quiz which appears next a users nickname in the results page.
<img src="./docs/images/testing/user-stories/engaging-avatars.jpeg">
</details>

<details><summary>User Story 3: Understanding Quiz Results</summary>
The house rules modal is a quick and easy way for users to get situated with the light hearted and simple rules of the Christmas quiz.


https://github.com/Ffionhaf96/msp-2-christmas-quiz/assets/140890469/836290af-fdda-4c9d-8ee0-8ee1e11f1805


</details>

<details><summary>User Story 4: Multi-Device Accessibility</summary>
The quiz can be enjoyed no matter what device is being used whether it's a small smartphone screen
<img src="./docs/images/testing/user-stories/multi-device-smartphone.jpeg">
or a bigger screen like on a desktop monitor or laptop
<img src="./docs/images/testing/user-stories/multi-device-big-screen.jpeg">
</details>

<details><summary>User Story 5:  Ease of Navigation</summary>
The restart button allows for users to either midway through the quiz, restart and reach the beginning of the quiz. They can also accomplish this at the end once they receive their results.


https://github.com/Ffionhaf96/msp-2-christmas-quiz/assets/140890469/c63b57bb-deee-424c-aab2-a327339a3e47


</details>
- - -

### Feature Testing

#### **Responsiveness / Device Testing**

The site was tested on the following devices:
- Dell Precision 5530 - 2160p Screen
- Phillips Ultrawide 34" monitor - 1440p screen
- Samsung Galaxy S23 Ultra - 2160p screen
- Google Chrome Developer Tools - simulator for all different device options as well as using the adjustable sizing options

- - -
#### **Browser Compatibility**

The site was tested on the following browsers.
* Google Chrome
* Mozilla Firefox

### Feature Testing Results Table

#### Site Wide

| Feature            | Expected Outcome                                                                                | Testing Performed                                                                                                                       | Result                                                                       | Pass/Fail |
|--------------------|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|-----------|
| Whole Page         | Layout is fully responsive                                                                      | Checked layout using dev tools to simulate multiple viewports of different devices. Tested on real devices with variable viewport size. | Page elements were responsive on all devices largely due to use of CSS Grid. | Pass      |
| Main Page Contents | Colors of elements are correctly matched to that of the color pallete defined in the README.md. | Manually checked browsers were displaying colors correctly and checked CSS variables were being used throughout for consistency.        | Content displayed as expected.                                               | Pass      |
| Favicon            | Appears in browser tab                                                                          | Checked browser tabs on multiple devices. Including saving as a shortcut on Android device via Samsung Browser.                         | Favicon appeared always.                                                     | Pass      |
| Console            | No debug statements are logged to console. Only caught errors such as failure to fetch data.    | Played through quiz and viewed browser console to manually confirm.                                                                     | No errors were found to be logged.                                           | Pass      |


#### Index Page
| Feature                       | Expected Outcome                                                                                                                                                               | Testing Performed                                                                                     | Result                                                                                                                                                            | Pass/Fail |
|--------------------|-------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|-----------|
| User can navigate to page     | A user can visit the [URL generated by deploying to GitHub pages](https://ffionhaf96.github.io/msp-2-christmas-quiz/index.html) and arrive at the Christmas Quiz start screen. | Navigating to the URL on multiple devices.                                                            | The index page is properly loaded and interactive.                                                                                                                | Pass      |
| Nickname Input                | A user should be able to input a nickname and save it. They should be notified if they have failed to perform or input an invalid name such as all spaces.                     | Input a name and saved it using the "save my nickname" button.                                        | The nickname is saved into localStorage.Empty spaces for a name results in an error message.                                                                      | Pass      |
| Avatar Selection              | A user can select one avatar from 5 preset emoji avatars and save their choice.                                                                                                | Every avatar was selected and ensured that it saved and appeared in the "Your current avatar" element | Avatars were correctly limited to only one, shown in the "your current avatar" element and stored in localStorage.                                                | Pass      |
| User can read the house rules | A user can click "House Rules" which informs them of the lighthearted rules of the quiz.                                                                                       | Clicking House Rules and making sure the modal loaded into view.                                      | Clicking the House Rules button loaded the Modal into the foreground of the page while disabling other elements.                                                  | Pass      |
| A user can start the quiz     | A user can start the quiz by clicking the "Let's get started" button.                                                                                                          | Clicking the lets get started button with the avatar and name inputs in various states.               | Clicking the let's get started button correctly notified the user they need to select an avatar or input a valid nickname or started the quiz if both were valid. | Pass      |


#### Quiz Page
| Feature                                        | Expected Outcome                                                                                                                                         | Testing Performed                                                                                                                                                      | Result                                                                                                                                                     | Pass/Fail |
|------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------|
| View a question                                | A user should be able to view the question for the current round.                                                                                        | The quiz was started and a question was displayed. This was confirmed to be one of the questions supplied via the `questions.json` file. This was done for each round. | The question was easily visible and matched one of the questions found in `question.json`                                                                  | Pass      |
| Select an answer from five choices             | One and only one answer can be selected at a time but the selection can be changed before the timer runs out.                                            | Each choice in the list was clicked, changed and then submitted by clicking "Final Answer!" and by letting the clock run out.                                          | An answer choice was saved in localStorage via either clicking "Final Answer!" or letting the timer run out and having it select the last picked item.     | Pass      |
| View how much time they have left on the timer | The timer should count down from 10 to 0 accurately with Time Left being displayed in a prominent yellow box. The timer should be reset for every round. | Each round of the quiz was loaded and the timer was ran out from 10 to 0 to confirm this behaviour held for all rounds of the quiz.                                    | A timer was displayed and counted down from 10 to 1. This is because 10 seconds has elapsed by the time 0 is shown so the next question is already loaded. | Pass      |
| View what round of the quiz they're on         | A user should be able to comprehend what round of the quiz they're on and how rounds of questions in total there are.                                    | Each round of the quiz the element displaying the round was checked to be the correct round and that it incremented by one each round.                                 | The rounds were clearly visible and incremented each round by 1 until the last round of the quiz was reached.                                              | Pass      |
| Submit their answer                            | An answer can be submitted once a choice is clicked and "Final Answer!" is clicked or when the timer runs out.                                           | An item in the answer choice list was clicked and "Final Answer!" button was clicked or let the timer run out for each round of the quiz.                              | An answer is successfully saved into localStorage when "Final Answer!" was clicked or the timer ran out.                                                   | Pass      |
| Restart the quiz                               | In any round the quiz can be restarted by clicking Restart Quiz and they will be brought back to the index page.                                         | For every round of the quiz the "Restart Quiz" button was clicked.                                                                                                     | Every click of "Restart Quiz" button navigated the broswer back to the index page and let the user submit a new nickname and new avatar.                   | Pass      |


#### Results Page
| Feature                                             | Expected Outcome                                                                                         | Testing Performed                                                                                                 | Result                                                                                                                         | Pass/Fail |
|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|-----------|
| View a teaser with their saved nickname and avatar  | The nickname and avatar saved at the start of the quiz is present with a teaser.                         | Input a nickname "Ffi" and chose every avatar (5 quiz completions)                                                | The nickname "Ffi" and the chosen emoji avatar was displayed alongside a teaser.                                               | Pass      |
| View their score from the quiz                      | A user can view their final score in the score element.                                                  | A quiz attempt was started and completed while purposefully choosing answers to gain scores from 0 to full score. | Each attempt resulted in the correct score being shown in the results page.                                                    | Pass      |
| View the category their score put them in           | A user can see the category they fall in based on their score.                                           | A game of the quiz was completed to purposefully fall into each of the 6 categories.                              | A unique category was provided for each attempt that fell into a different category band based on the percentage of the score. | Pass      |
| View a festive description of their ability         | A user can read a festive description of their abilities based on the score achieved.                    | A game of the quiz was completed to purposefully fall into each of the 6 categories.                              | A festive description message was displayed that correctly matched the category based on the percentage of the score.          | Pass      |
| View a festive image based on their category        | A user can view a special festive image that represents their christmas knowledge abilities.             | A game of the quiz was completed to purposefully fall into each of the 6 categories.                              | A unique festive image was viewable based on the cateogry achieved.                                                            | Pass      |
| View some festive advice based on category          | A user is given some advice to help them get into the christmas spirit based on their category achieved. | A game of the quiz was completed to purposefully fall into each of the 6 categories.                              | A festive suggestion was given unique to each category.                                                                        |           |
| A user can restart the quiz                         | A user can restart the quiz from the results page.                                                       | A game of the quiz was completed. The restart button was then clicked.                                            | The restart button navigated the browser back to the index page and let the user choose a new nickname and avatar.             |           |

- - -
## Bugs & Fixes

Throughout the development and testing phases, besides the enhancements mentioned in the validation section above, I came across the following bugs:

- Bug 1 - Storing Array objects directly in localStorage did not work
    - Fix - [Use `JSON.parse()` and `JSON.stringify()` to store an Array as a string](https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage)

- Bug 2 - `chosenAnswers` key needed click event triggered twice to move onto next question
    - Fix - Originally incrementing values with postfix (`index++`) operation which returned value of index and then incremented. Changing to a prefix (`++index`) operation incremented and then returned the value which was intended behaviour.

- Bug 3 - Quiz countdown timer using `setInterval` was not restarting for each new question.
    - Fix: `startTimer()` was being started in two places instead of just one. Changed to start in only one.
    __see__: use `git --no-pager diff c1b48936f188e9c6e8c033edb6d53111fe63f2dc 1759283cac75f9a47233ffbe7f190dc8fde9814b -- game.js` to see the exact fix.

- Bug 4 - Bluring elements for modal to appear only visible by targetting `body` element made everything blurred.
    - Fix: For this I had to find how to select every element that was a `child` of `body` and then not apply a blur to the modal. Luckily there is a property you can access on an element called `child`. This then lead me to Bug 5. 

- Bug 5 - Trying to apply `.classList.add("blur-10");` to each element from `body` using the `child` property did not work.
    - Fix: The `child` property returns a HTMLCollection which is not iterable. So I had to find a way to convert HTMLCollection to an Array. I found a solution on StackOverflow that suggest using `Array.from(HTMLCollection)`. This worked well and enabled me to apply `.classList.add("blur-10");`

- Bug 6 - Passing an argument to function that handles click event made function immediately execute without click event which caused the  e.g. `houseRules.addEventListener('click', handleHouseRules(true)`
    - Fix: Passing the argument to the function via the [`bind`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind) method made the argument available to the function but didn't invoke a function call immediately.
    ![console log showing both true and false arguments being triggered for the same function within 2 milliseconds](FILL IN WITH CONSOLE EPOCH IMG)

- - -
### Known & Remaining Bugs
The details about any remaining bugs are provided in the information above. For more detail, click on the links below:

#### Excessive Rounds added to Quiz round counter on back navigation
If you follow this flow:
`Start Quiz -> View question round -> Navigate back to start quiz with browser back button -> Start Quiz again`

You will see the Round counter is incorrect until the next question is viewed.
<details><summary>Incorrect rounds displayed</summary>
<img src="./docs/images/testing/validation/excessive-rounds-bug.png">
</details>

[Go to README](README.md)
