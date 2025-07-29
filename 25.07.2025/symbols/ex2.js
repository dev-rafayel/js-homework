const first = Symbol.for('Session');
const second = Symbol.for('Session');
const third = Symbol.for('Session');
const fourth = Symbol('Session');

console.log(Symbol.keyFor(first));
console.log(Symbol.keyFor(second));
console.log(Symbol.keyFor(third));
console.log(first !== fourth);  // the variables that using symbol.for are equal to each other because of globalSymbolRegistor, it save's the symbol's id 
// and the variables using basic Symbol are not equal to each other because the ID is unique
