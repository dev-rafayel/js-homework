let str = "Hello world!";
let sep = 'l';
let result = [];
let current = "";

function split(str, sep)
{
    // if (str == "") return null;

    for (let i = 0; i < str.length; ++i)
    {
        if (str[i] !== sep)
        {
            current += str[i];
        }
        
        else if (str[i + 1] === sep) 
        {
            continue;
        }
        
        else
        {
            result.push(current);
            current = "";
        }
    }
    result.push(current);
    return result;
}
console.log(split(str, sep));
