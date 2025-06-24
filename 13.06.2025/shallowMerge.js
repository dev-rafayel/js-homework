let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let obj3 = { c: 5, d: 6 };

function shallowMerge(...objects)
{
    const result = {}

    for (const obj of objects)
    {
        for (const key in obj)
        {
            result[key] = obj[key];
        }
    }
    return result
} 

console.log(shallowMerge(obj1, obj2, obj3));
 