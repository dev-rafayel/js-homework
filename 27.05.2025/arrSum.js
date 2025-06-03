let expenses = [50, 75, 100];

function arrSum(expenses) 
{
    let sum = 0;
    for (let i = 0; i < expenses.length; ++i)
    {
        sum += expenses[i];
    }
    return sum;
}
console.log(arrSum(expenses));