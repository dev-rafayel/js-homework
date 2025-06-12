let arr = [1, 2, 3, 4, 5];

function even(element) 
{
    if (typeof(element) !== 'number') return "Passed wrong argument type."
 
    return element % 2 === 0;
}

function my_some(arr, callback)
{
    for (let i = 0; i < arr.length; ++i)
    {
        if (callback(arr[i]))
        {
            return true;
        }
    }
    return false;
}

console.log(my_some(arr, even));