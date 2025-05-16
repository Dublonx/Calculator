// calculator
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const displayValue = document.querySelector("#inputValue");
    
    // if
    if (button.textContent === "C") {
      displayValue.value = "";
    } else if (button.textContent === "R") {
      displayValue.value = displayValue.value.slice(0, -1);
    } else if (button.textContent === "=") {
      displayValue.value = eval(displayValue.value);
    } else {
      displayValue.value += button.textContent;
    }
  });''
})