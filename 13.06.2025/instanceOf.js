class Person
{
    constructor(name, age, major)
    {
        this.name = name;
        this.age = age;
        this.major = major;
    }
}

const Student = new Person("Raf", 20, "Student");
// cheking the prototypes manually
    if (Object.getPrototypeOf(Student) === Person.prototype)
    {
        console.log(true);
    } 
    else 
    {
        console.log(false);
    } 

// using instanceof method
console.log(Student instanceof Person);
