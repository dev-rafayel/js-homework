let count = 10;
const timer = document.getElementById("time");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    const interval = setInterval(() => {
        timer.textContent = count;
        --count;

        if (count < 0)
        {
            clearInterval(1000);
            timer.textContent = "Time's up!";
            stop(timer.textContent);
        }
    }, 1000);
});