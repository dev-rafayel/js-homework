const admin = {
    name: "Administator",
    age: 24,
    phone: "+123-456-7890",
    born: 2000,
};

function filteredObject(admin) 
{
    if (typeof(admin) !== 'object') return "Wrong argument type passed.";
    
    const result = {}
    
    for (let key in admin)
    {
        const value = admin[key]
        if (typeof(value) === 'number' && value >= 0 && value <= 9)
        {
            result[key] = value;
        } 
    }
    return result
}

console.log(filteredObject(admin));
