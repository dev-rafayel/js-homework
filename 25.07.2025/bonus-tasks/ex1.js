class Money {
    #amount = null;
    constructor(amount)
    {
        this.#amount = amount;
    }

    [Symbol.toPrimitive](value)
    {
        if (typeof value === 'number')
        {
            return this.#amount;
        }

        if (typeof value === 'string')
        {
            return `$${this.#amount.toFixed(2)}`;
        }

        return `$${this.#amount}`;
    }
}

const money = new Money(255.95);
console.log(money + 5)
console.log(`Balance: ${money}`)
console.log(String(money))