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

I ran the site through the [Wave Web Accessibility Evaulation Tool](https://wave.webaim.org/). 

#### **Accessibility Errors**
<!--> Insert details of any errors or warnings here <-->


#### **Wave Web Accessibility Results Post-Fix**

<details><summary>Wave Web Accessibility Final Results index.html</summary>
<img src="">
</details>

<details><summary>Wave Web Accessibility Final Results  game.html</summary>
<img src="">
</details>

<details><summary>Wave Web Accessibility Final Results  results.html</summary>
<img src="">
</details>

- - -

### Performance
I utilized Google Chrome Dev Tools' Lighthouse to assess the performance of the site.


#### **Original Results**

<details><summary>Home Page</summary>
<img src="">

*Home Page - Desktop*

<img src="">

*Home Page - Mobile*

<img src="">

*Main Page - Mobile - Accessibility Warning*

</details>

<details><summary>Game Page</summary>
<img src="">

*Game Page - Desktop*

<img src="">

*Game Page - Mobile*

<img src="">

*Game Page - Mobile - Accessibility Warning*

</details>

<details><summary>Results Page</summary>
<img src="">

*Results Page - Desktop*

<img src="">

*Results Page - Mobile*

<img src="">

*Results Page - Mobile - Accessibility Warning*

</details>

<details><summary>404</summary>
<img src="">

*404 - Desktop*

<img src="">

*404 - Mobile*

<img src="">

*404 - Mobile - Warning*

</details>

<!--> Detail information regarding the concerns raised by Lighthouse. <-->

#### **Final Results**

<details><summary>Home Page</summary>
<img src="">

*Home Page - Desktop*

<img src="">

*Home Page - Mobile*

</details>

<details><summary>Game Page</summary>
<img src="">

*Game Page - Desktop*

<img src="">

*Game Page - Mobile*

</details>

<details><summary>Results Page</summary>
<img src="">

*Results Page - Desktop*

<img src="">

*Results Page - Mobile*

</details>

<details><summary>404</summary>
<img src="">

*404 - Desktop*

<img src="">

*404 - Mobile*

</details>

- - -

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

- Bug 4 - 


- - -
### Known & Remaining Bugs
The details about any remaining bugs are provided in the information above. For more detail, click on the links below:

<!-->insert detail of any unresolved bugs <-->

- - -
- - -

[Go to README](README.md)