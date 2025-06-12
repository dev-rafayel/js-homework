let arr = [1, 2, 3, 4, 5, 6];

function evenNums(element) 
{
    return element % 2 === 0;    
}

function filter(arr, callback)
{
    let newArr = [];

    for (let i = 0; i < arr.length; ++i)
    {
        if (callback(arr[i]))
        {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

let result = filter(arr, evenNums);
console.log(result);