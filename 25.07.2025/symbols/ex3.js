class adminOnly 
{
    static [Symbol.hasInstance](obj) 
    {
        return obj && obj.role === "admin";
    }    
}

const person1 = { name: "Something", role: "admin"};
const person2 = { name: "Something", role: "user"};

console.log(person1 instanceof adminOnly)
console.log(person2 instanceof adminOnly)