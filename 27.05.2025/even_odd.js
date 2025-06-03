let num = 15;

function even_odd(num) 
{
    if ((num & 1) == 0) return "even";
    return "odd";
}
console.log(even_odd(num))