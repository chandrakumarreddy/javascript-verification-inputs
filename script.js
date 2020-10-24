const form = document.querySelector("[name='verify']");
const inputs = document.querySelectorAll(".inputs input");
const verifyButton = document.querySelector("[type='submit']");

function handleInput(e) {
  const input = e.target;
  if (input.value && input.nextElementSibling) {
    input.nextElementSibling.focus();
  }
}

function handlePaste(e) {
  const paste = e.clipboardData.getData("text");
  inputs.forEach((_input, i) => {
    _input.value = paste[i] || "";
  });

  if (paste.length === 6) {
    form.submit();
  } else {
    document.querySelector(`[name=n${paste.length}]`).focus();
  }
}

function handleKeyDown(e) {
  if (e.keyCode === 8 || e.which === 8) {
    const input = e.target;
    if (input.previousElementSibling) {
      input.previousElementSibling.focus();
    }
  }
}

function handleClick(e) {
  if (e.target.value) {
    e.target.select();
    e.target.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
}

inputs[0].addEventListener("paste", handlePaste);
form.addEventListener("input", handleInput);
form.addEventListener("keydown", handleKeyDown);
form.addEventListener("click", handleClick);

// sample inputs

//1. 123456
//2. 987654

// Assignments

// 1. select the text when the next input is focued ✅
// 2. Auto submit the form if all fields are filled after a paste ✅
// 3. support for backspacing from 1 input to another ✅
