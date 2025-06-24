const user = {
    name: "Raf",
    age: 20,
    major: "Student",
    email: "rafkrdyan18@gmail.com",
    phone: "+374-123-456-789"
}


function objToArr(user)
{
    if (typeof(user) !== 'object') return "Wrong type of argument passed."
    
    return Object.values(user).map(val => {
        return String(val).toUpperCase()
    });
}
console.log(objToArr(user));
