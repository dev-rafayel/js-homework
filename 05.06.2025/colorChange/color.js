let colors = document.getElementById("color");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
    colors = randomColor;
});
