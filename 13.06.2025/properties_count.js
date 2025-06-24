const obj = {
    name: "Flan",
    surname: "Fstan",
    age: 41,
}

const proto = {
    major: "Co-worker",
    gender: "Male",
}

Object.setPrototypeOf(obj, proto);

function propertiesCount(obj)
{
    if (typeof(obj) !== 'object') return "Wrong type of argument passed.";
    
    let count = 0;
    for (let key in obj)
    {
        count++;
    } 
    return count;  
}
    
console.log(propertiesCount(obj));
