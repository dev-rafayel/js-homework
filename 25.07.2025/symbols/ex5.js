const first = Symbol("Something");
const second = Symbol("Something");

const obj = {};
obj[first] = "First something";
obj[second] = "Second something";

obj[Symbol.iterator] = function() {
    const values = Object.getOwnPropertySymbols(this);
    let index = 0;

    return {
        next: () => 
        {
            if (index < symbols.length) 
            {
                const key = values[index++];
                return { value: this[key], done: false };
            }
            return { value: undefined, done: true };
        }
    };
};

for (let value of obj) 
{
    console.log(value);
}