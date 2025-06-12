//  This is first IndexOf 

let arr = [1, 2, 3, 3, 4, 5];
let target = 3;

function my_indexOf(arr, target)
{
    for (let i = 0; i < arr.length; ++i)
    {
        if (arr[i] === target)
        {
            console.log("Index of the target: ");
            return i;
        }
    }    
    return -1;
}

console.log(my_indexOf(arr, target));

//      This is addition from me
function my_lastIndexOf(arr, target)
{
    for (let i = arr.length; i >= 0; --i)
    {
        if (arr[i] === target)
        {
            return i;
        }
    }    
    return -1;
}

console.log(my_lastIndexOf(arr, target));