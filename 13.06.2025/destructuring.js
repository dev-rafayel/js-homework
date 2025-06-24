const user = {
    id: 1,
    personalInfo: {
        name: "Alex",
        age: 25,
        address: {
            city: "Yerevan",
            country: "Armenia",
        }
    }
};

const {
    personalInfo: {
        name,
        age,
        address: { country, city }
    }
} = user;

console.log(country, city);


