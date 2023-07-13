const inputs = document.querySelectorAll(".inputs input");

inputs.forEach((input, index) => {
  input.addEventListener("input", (event) => {
    const currentInput = event.target;
    const maxLength = parseInt(currentInput.getAttribute("maxlength"));

    if (currentInput.value.length >= maxLength) {
      // If the current input is filled, move focus to the next input
      if (index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    }
  });

  // Handle backspace key to move to the previous input if current input is empty
  input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && event.target.value.length === 0) {
      if (index > 0) {
        inputs[index - 1].focus();
      }
    }
  });
});
