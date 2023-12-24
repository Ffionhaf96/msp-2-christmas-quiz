/* eslint-disable no-console */
/**
 * Saves a user defined name to the 'nickname' localstorage key/value.
 */
function handleSaveName() {
  const inputName = document.querySelector('#name').value.trim();
  if (inputName) {
    document.querySelector('.message').textContent = '';
    const savedName = document.querySelector('.saved-name');
    savedName.textContent = `Current Name: ${inputName}`;
    localStorage.setItem('nickname', inputName);
  } else {
    document.querySelector('.message').textContent = "Nickname can't just be whitespace!";
  }
}
// listen for click event on save-name
const saveName = document.querySelector('.save-name');
saveName.addEventListener('click', handleSaveName);

/**
 *
 * @param {*} showModal
 */
function handleHouseRules(showModal) {
  // get all child elements of body
  const childrenList = document.querySelector('body').children;
  // turn HTMLCollection into an iterable type Array 👉🏻 https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array
  Array.from(childrenList).forEach((elem) => {
    if (elem.id === 'house-rules-modal') {
      elem.setAttribute('aria-expanded', showModal);
      return;
    }
    // blur the elements and disable selection and pointer events with CSS.
    elem.classList.toggle('blur-10');
    elem.classList.toggle('disable');
  });
  // get the modal element
  const modal = document.querySelector('#house-rules-modal');
  // make the modal appear
  modal.style.display = showModal ? 'block' : 'none';
}

// listen for click event on house-rules
const houseRules = document.querySelector('.house-rules');
// use bind to pass argument to function without instantly calling it https://stackoverflow.com/a/23024673
houseRules.addEventListener('click', handleHouseRules.bind(null, true));

// // listen for click event on house-rules-accepted
const houseRulesAccepted = document.querySelector('.house-rules-accepted');
// use bind to pass argument to function without instantly calling it https://stackoverflow.com/a/23024673
houseRulesAccepted.addEventListener('click', handleHouseRules.bind(null, false));

const avatarItems = document.querySelectorAll('.avatar-selector ul li');
console.log(avatarItems);

function handleSelectAvatar(event) {
  // Remove 'selected' class from all list item
  avatarItems.forEach((li) => li.classList.remove('selected-avatar'));
  // Add 'selected' class to the clicked item
  event.target.classList.add('selected-avatar');
  // Save the value of the avatar
  const clickedAvatarIndex = Array.from(avatarItems).indexOf(event.target);

  const chosenAvatar = Array.from(avatarItems)[clickedAvatarIndex].textContent;
  localStorage.setItem('avatar', chosenAvatar);
  document.querySelector('.avatar-prompt').textContent = 'Your current avatar!';
  document.querySelector('.chosen-avatar').textContent = localStorage.getItem('avatar');
}

avatarItems.forEach((li) => {
  li.addEventListener('click', handleSelectAvatar);
});

const startGame = document.querySelector('.start-game');
function checkSelectionsMade() {
  const nickname = localStorage.getItem('nickname');
  const avatar = localStorage.getItem('avatar');
  // if we've got both nickname and avatar strings saved in localStorage we're GTG
  if (nickname && avatar) {
    window.location.href = 'game.html';
  } else {
    document.querySelector('.message').textContent = 'You must select a nickname and avatar!';
  }
}

startGame.addEventListener('click', checkSelectionsMade);
