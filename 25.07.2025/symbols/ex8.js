const range = {
    start: 0,
    end: 50,
    step: 5,
    
    *[Symbol.iterator]() 
    {
        const { start, end, step } = this;
        
        if ((step <= 0 || start > end) || end < start)
        {
            throw new Error("Invalid range parameters.");
        }

        for (let i = start; step > 0 ? i < end : i > end; i += step)
        {
            yield i;
        }
    }
};

for (const num of range)
{
    console.log(num);
}

