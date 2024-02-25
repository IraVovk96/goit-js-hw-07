const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener("input", handleInput);
function handleInput(event) {
    const valueOfTrim = this.value.trim();
    if (valueOfTrim === "") {
        nameOutput.textContent = `Anonymous`;
    } else {
        nameOutput.textContent = valueOfTrim;
    }
}


 