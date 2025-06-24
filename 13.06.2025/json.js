const object = {
    name: "something",
}

const str = JSON.stringify(object)
obj = JSON.parse(str);

console.log(obj);
console.log(str);
