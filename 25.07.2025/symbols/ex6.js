const first = Symbol("Something");
const second = Symbol("Something");

const obj = {};
obj[first] = "SomeThing";
obj[second] = "something";

obj[Symbol.iterator] = function() 
{
    const values = Object.getOwnPropertySymbols(this);
    let index = values.length - 1;
    
    return {
        next: () => {
            if (index >= 0)
            {
                const key = values[index--];
                return { value: this[key], done: false };
            }
            return { value: undefined, done: true };
        }
    }
}

const iterator = obj[Symbol.iterator]();

for (let value of obj)
{
    console.log(value);
}