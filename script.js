document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.classList.contains("number") || button.classList.contains("dot")) {
                currentInput += button.value;
            } else if (button.classList.contains("operator")) {
                currentInput += ` ${button.value} `;
            } else if (button.classList.contains("equal")) {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (error) {
                    currentInput = "Error";
                }
            } else if (button.classList.contains("clear")) {
                currentInput = "";
            }

            display.value = currentInput;
        });
    });
});
