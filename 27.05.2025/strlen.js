let string = "Hello world.";
let len = 0;

function strlen(string, len)
{
    if (typeof(string) == "string")
    {
        for (let i = 0; string[i] != undefined; ++i) ++len;
    }
    return len;
}
let res = console.log(strlen(string, len));