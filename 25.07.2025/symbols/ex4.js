const obj = {
    
    0: 1,
    1: 2,
    2: 3,
    length: 3,
    [Symbol.isConcatSpreadable]: true,
}

console.log([].concat(obj));

obj[Symbol.isConcatSpreadable] = false;

console.log([].concat(obj)); 
console.log([].concat(obj)); 
