let str = "Learning JavaScript";
let sub = "Java";

function find_subString(str, sub)
{
    if (typeof(str) != 'string')
    {
        console.log("The argument is not string.");
        return 0;
    }
        
    const str_len = str.length;
    const sub_len = sub.length;
    
    for (let i = 0; i <= str_len - sub_len; ++i)
    {
        let j = 0;

        while (j < sub_len && str[i + j] === sub[j])
        {
            j++;
        }

        if (j === sub_len)
        {
            return i;
        }
    }
    return -1;
}