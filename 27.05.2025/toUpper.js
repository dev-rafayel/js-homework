let str = "Hello world!";

function toUpper(str)
{
    if (typeof(str) !== "string")
    {
        console.log("The variable type is not string.");
        return 0;
    }
    let result = "";
    
    for (let i = 0; i < str.length; ++i)
    {    
        let code = str.charCodeAt(i); 
        if (code >= 97 && code <= 122)
        {
            result += String.fromCharCode(code ^ 32);
        }

        else result += str[i]; 
    }        
    return result;
}
let res = console.log(toUpper(str));