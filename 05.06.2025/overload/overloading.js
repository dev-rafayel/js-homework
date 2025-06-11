const arg1 = 10;
const arg2 = 20;
const arg3 = 30;

function overloading(arg1, arg2)
{
    if (arg3 === undefined) console.log(arg1 + arg2);

    console.log(arg1 + arg2 + arg3);
}

console.log(overloading(arg1, arg2));