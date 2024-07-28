// Calculator
const display = document.getElementById("display");
const buttonCl = document.querySelectorAll("button");

for(let i = 0; i <= buttonCl.length; i++) {
  buttonCl[i].addEventListener("click", () => {
    const buttonValue = buttonCl[i].textContent;
    
    // if statement
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === 'R') {
      removeResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  display.value = '';
}

function removeResult() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  display.value = eval(display.value);
}

function appendValue(buttonValue) {
  display.value += buttonValue;
}