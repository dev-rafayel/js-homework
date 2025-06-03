let array1 = [1, 2];
let array2 = [3, 4];

function merge(array1, array2)
{
    if (!Array.isArray(array1) && !Array.isArray(array2))
    {
        console.log("The argument is not an object.");
        return 0;
    }

    let arr3 = [];

    for (let i = 0; i < array1.length + array2.length; ++i)
    {
        if (i < array1.length)
        {
            arr3.push(array1[i])
        } 
        
        else 
        {
            arr3.push(array2[i - array1.length]);
        }
    }
    return arr3; 
}

let res = console.log(merge(array1, array2));