let arr = [6, 2, 4, 2, 5];

function even(element) 
{
    return element % 2 === 0;
}

function my_every(arr, callback) 
{
    for (let i = 0; i < arr.length; ++i)
    {
        if (!callback(arr[i]))
        {
            return false;
        }
    }    
    return true;
}

console.log(my_every(arr, even));