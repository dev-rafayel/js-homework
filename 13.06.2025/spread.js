const user = {
    name: "Raf",
    age: 20,
    major: "Student",
    email: "rafkrdyan18@gmail.com",
    phone: "+374-123-456-789"
}

function spread(user) 
{
    if (typeof(user) !== 'object') return "Wrong type of argument passed.";

    const { name, email, phone, ...rest } = user;

    console.log("Main information:\n", name);
    console.log(email);
    console.log(phone);
    return rest;
}

spread(user)