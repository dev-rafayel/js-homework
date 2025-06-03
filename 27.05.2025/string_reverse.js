let strin = [5,6,8];

function reverse(string)
{
    if (typeof(string) !== "string")
    {
        console.log("The variable type is not string.");
        return 0;
    }
    
    let result = "";
    for (let i = string.length - 1; i >= 0; --i)
    {
        result += string[i];
    }
    return result;
}
let res = console.log(reverse(string));

// let res = strin.reverse();
// console.log(res);

// const array1 = ["one", "two", "three"];
// console.log("array1:", array1);
// // Expected output: "array1:" Array ["one", "two", "three"]

// const reversed = array1.reverse();
// console.log("reversed:", reversed);
// // Expected output: "reversed:" Array ["three", "two", "one"]

// // Careful: reverse is destructive -- it changes the original array.
// console.log("array1:", array1);
// // Expected output: "array1:" Array ["three", "two", "one"]
