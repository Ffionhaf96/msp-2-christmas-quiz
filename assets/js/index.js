
function handleSaveName() {
    const inputName = document.querySelector('#name').value;
    localStorage.setItem('nickname', inputName);
    const savedName = document.querySelector('.saved-name');
    savedName.textContent = `Current Name: ${inputName}`;
}

const saveName = document.querySelector('.save-name');
saveName.addEventListener('click', handleSaveName);
