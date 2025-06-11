const display = document.querySelector(".display");
const buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
    button.addEventListener("click", (ev) => {
        switch (ev.target.innerText)
        {
            case "AC":
                display.innerText = "0";
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch (ev) {
                    display.innerText = "Error!";
                }
                break;
            case "%":
                const passedText = display.innerText + "/100";
                display.innerText = eval(passedText);
                break;
            case "+/-":
                display.innerText = "-";
                break;
            default:
            if (display.innerText === "0" && ev.target.innerText !== ".")
            {
                display.innerText = ev.target.innerText;
            }    
            else display.innerText += ev.target.innerText;
        }
    });
});