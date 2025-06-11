const password = document.getElementById("passwd");
const button = document.getElementById("hide");

button.addEventListener("click", () => {
    if (password.type === "password") 
        password.type = "text";
    
    else password.type = "password"; 
});
