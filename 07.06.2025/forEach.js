function myForEach(array, callback) 
{
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

let arr = [1, 2, 3 , 4];

function printDouble(element)
{
    console.log(element * 2);
}   

myForEach(arr, printDouble);