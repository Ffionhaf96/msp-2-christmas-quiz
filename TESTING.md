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

<!--> Detail the errors that show up below <-->

<details><summary>Error 1</summary>
<img src="">
</details>

<!--> insert brief description of the erros and the fix implemented to remove the error <-->

#### **HTML Validation Post-Fix**

<details><summary>HTML Validation index.html</summary>
<img src="">
</details>

<details><summary>HTML Validation game.html</summary>
<img src="">
</details>

<details><summary>HTML Validation results.html</summary>
<img src="">
</details>

- - -

### CSS Validation

I subjected the CSS code of all the pages to validation using the  [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input). 

#### **Errors**

<details><summary>CSS Validation Initial Results</summary>
<img src="">
</details>

There were [insert number] errors:

<details><summary>Error 1</summary>
<img src="">
</details>

#### **CSS Validation Post-Fix**

<details><summary>CSS Validation Final Results</summary>
<img src="">
</details>

- - -

### JavaScript Validation

I subjected the JavaScript code of all the pages to validation using the [JSHint](https://jshint.com/). 

<!--> Insert details of any errors or warnings here <-->

#### **JavaScript Validation Post-Fix**

<details><summary>JavaScript Validation Final Results</summary>
<img src="">
</details>


- - -

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
<details><summary>Performance Emulation</summary>
All Mobile benchmarks in Chrome Dev Tool's Lighthouse were ran emulating a Moto G Power smartphone using Chromium 120.0.0.0 and a slow 4G network connection.
<img src="/docs/images/testing/performance/lighthose-mobile-simulated-env.png">
</details>

Desktop benchmarks did not have any emualtion applied.

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
<img src="">
</details>

<details><summary>User Story 2: Engaging Visual Content</summary>
<img src="">
</details>

<details><summary>User Story 3: Understanding Quiz Results</summary>
<img src="">
</details>

<details><summary>User Story 4: Multi-Device Accessibility</summary>
<img src="">
</details>

<details><summary>User Story 5:  Ease of Navigation</summary>
<img src="">

</details>
- - -

### Feature Testing

#### **Responsiveness / Device Testing**

The site was tested on the following devices:

<!--> Insert which devices it was tested on <-->

**Bugs found - specific to device testing:**

<!--> Insert bug information here <-->

- - -
#### **Browser Compatibility**

The site was tested on the following browsers.
* Google Chrome
* Mozilla Firefox

**Bugs found - specific to browser testing:**

<!--> Insert bug information here <-->

- - -

### Feature Testing Results Table


<!--> Insert feature testing information here <-->

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

<!-->insert detail of any unresolved bugs <-->

- - -
- - -

[Go to README](README.md)