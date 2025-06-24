const person = {
    greet () {
        console.log(`I'm ${this.name}`);
    }
};

const student = {
    name: "Raf",
    major: "Web developer",

    greet()
    {
        console.log(`I'm ${this.name} and my major is ${this.major}`);
    }
};

Object.setPrototypeOf(student, person);
student.greet();