const range = {
    from: 1,
    to: 5,
    skipEven: false,

    *[Symbol.iterator]() {
        for (let i = this.from; i <= this.to; ++i)
        {
            if (this.skipEven && i % 2 === 0)
            {
                continue;
            }
            yield i;
        }
    }
}
console.log("All numbers...");
for (let nums of range)
{
    console.log(nums);
}

range.skipEven = true;

console.log("Only odd numbers...")

for (let nums of range)
{
    console.log(nums)
}

