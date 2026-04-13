// Calculator
const display = document.querySelector('#calculatorDisplay');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
 button.addEventListener("click", () => {
  const value = button.innerText;
  
  // if
  if (value === "AC") {
   display.value = "";
  } else if (value === "R") {
   display.value = display.value.slice(0, -1);
  } else if (value === "=") {
   display.value = eval(display.value);
  } else {
   display.value += value;
  }
 });
});