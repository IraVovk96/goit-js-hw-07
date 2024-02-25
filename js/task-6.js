function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')}`;
  }

  function createBoxes(amount) {
    const boxesContainer = document.getElementById('boxes');
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      boxesContainer.appendChild(box);
    }
  }

  function destroyBoxes() {
    const boxesContainer = document.getElementById('boxes');
    boxesContainer.innerHTML = '';
  }

  document.querySelector('[data-create]').addEventListener('click', () => {
    const inputAmount = document.getElementById('inputAmount').value;
    if (inputAmount >= 1 && inputAmount <= 100) {
      createBoxes(inputAmount);
      document.getElementById('inputAmount').value = '';
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });

  document.querySelector('[data-destroy]').addEventListener('click', () => {
    destroyBoxes();
  });