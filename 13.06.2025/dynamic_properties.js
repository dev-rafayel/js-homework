let keys = ["name", "age", "state", "age1", "age2"];
let values = ["John", 31, "Student"];

let obj = {};

function add_properties(keys, values, obj)
{
    if (keys.length === 0) return "You don't have keys.";

    for (let i = 0; i < keys.length; ++i)
    {
        if (keys.length >= values.length || values[i] !== undefined)
        {
            if (values[i] === undefined) continue;
            
            obj[keys[i]] = values[i];
        }
    }
    return obj;
}
console.log(add_properties(keys, values, obj));

