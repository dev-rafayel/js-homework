let student = {
    name: "Sahak_Partev",
}

Object.freeze(student);
student.name = "noName";
console.log(student.name);