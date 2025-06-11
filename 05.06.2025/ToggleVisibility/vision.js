// JavaScript Task: Write a function that toggles the visibility of the <p> element when the button is clicked, using CSS display property.

const text = document.getElementById("text");
const button = document.getElementById("vision");

function updateStatement()
{
    if (text.style.display === "block")
    {
        text.style.display = "none" 
    }
    
    else 
    {
        text.style.display = "none" 
    }
}

button.addEventListener("click", updateStatement);