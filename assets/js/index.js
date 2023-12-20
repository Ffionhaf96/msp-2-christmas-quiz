
// handle saving 
function handleSaveName() {
    const inputName = document.querySelector('#name').value;
    localStorage.setItem('nickname', inputName);
    const savedName = document.querySelector('.saved-name');
    savedName.textContent = `Current Name: ${inputName}`;
}
// listen for click event on save-name
const saveName = document.querySelector('.save-name');
saveName.addEventListener('click', handleSaveName);



const avatarItems = document.querySelectorAll('.avatar-selector ul li');
console.log(avatarItems);

function handleSelectAvatar(event) {
    // Remove 'selected' class from all list item
    avatarItems.forEach(li => li.classList.remove('selected-avatar'));
    // Add 'selected' class to the clicked item
    event.target.classList.add('selected-avatar');
    // Save the value of the avatar
    const clickedAvatarIndex = Array.from(avatarItems).indexOf(event.target);

    const chosenAvatar = Array.from(avatarItems)[clickedAvatarIndex].textContent;
    localStorage.setItem('avatar', chosenAvatar);
    document.querySelector('.avatar-prompt').textContent = "Your current avatar!";
    document.querySelector('.chosen-avatar').textContent = localStorage.getItem('avatar');
}

avatarItems.forEach((li, index) => {
    li.addEventListener('click', handleSelectAvatar);
});

const startGame = document.querySelector('.start-game');
startGame.addEventListener('click', checkSelectionsMade)

function checkSelectionsMade() {
    const nickname = localStorage.getItem('nickname');
    const avatar = localStorage.getItem('avatar');
    if (nickname && avatar) {
        window.location.href = "game.html";
    }else{
        document.querySelector('.message').textContent = "You must select a nickname and avatar!"
    }
}
