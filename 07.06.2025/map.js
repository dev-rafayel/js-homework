let arr = [1, 2, 3, 4, 5];

function add(element)
{
    return element += 100;
}

function myMap(arr, callback)
{
    let newArr = [];
    for (let i = 0; i < arr.length; ++i)
    {
        newArr[i] = callback(arr[i], i, arr);
    }
    return newArr;
}

let result = myMap(arr, add);
console.log(result);