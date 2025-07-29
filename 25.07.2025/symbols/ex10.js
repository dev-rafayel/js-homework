const generator = {
    arr: [1, [2, [3, 4], 5], 6],

    *[Symbol.iterator]()
    {
        function* checkInArr(arr) {
            for (const item of arr)
            {
                if (Array.isArray(item))
                {
                    yield* checkInArr(item);
                }
                else {
                    yield item;
                }
            }
        }
        yield* checkInArr(arr);
    }
};

const arr = [1, [2, [3, 4], 5], 6];

for (const val of generator)
{
    console.log(val);
}