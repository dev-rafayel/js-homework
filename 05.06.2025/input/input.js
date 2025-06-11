const input = document.getElementById("login");
const output = document.getElementById("output");
const out = document.getElementById("out");

input.addEventListener("input", () => {
    out.textContent = "Entered: " + input.value;
})