// const obj1 = { a: 5, b: 10}
// const obj2 = { a: 5, b: 10}

// function deeply_equal(...objects) 
// {
//     const keys1 = Object.keys(obj1)
//     const keys2 = Object.keys(obj2)

//     if (keys1.length !== keys2.length) return false
    
//     return keys1.every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key])
// }

// console.log(deeply_equal(obj1, obj2));       // output: true




// const obj1 = { a: 5, b: 10}
// const obj2 = { a: 5, b: 10, c: 4}

// function deeply_equal(...objects) 
// {
//     const keys1 = Object.keys(obj1)
//     const keys2 = Object.keys(obj2)

//     if (keys1.length !== keys2.length) return false
    
//     return keys1.every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key])
// }

// console.log(deeply_equal(obj1, obj2)); // output: false