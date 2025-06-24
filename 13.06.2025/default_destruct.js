const user = {
    name: "Alex",
    age: 25,
    phone: "000-000-000",
}

const {
    name,
    age,
    phone,
    surname = null,
    defCase = null,
} = user

console.log(surname)
console.log(defCase)
console.log(user)