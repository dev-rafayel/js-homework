class Shape {
    constructor()
    {
        if (new.target === Shape)
        {
            throw new Error("The shape can not be initialized.");
        }
    }

    getArea(...args)
    {
        throw new Error("The Area can not be initialized.");
    }
}

class Rectangle extends Shape {
    constructor(len, width)
    {
        super();
        this.len = len;
        this.width = width;
    }

    getArea()
    {
        return this.len * this.width;
    }
}

class Circle extends Shape {
    constructor(radius)
    {
        super();
        this.radius = radius;
    }

    getArea()
    {
        return Math.PI * this.radius * this.radius;
    }
}

// const shape = new Shape();            
const rect = new Rectangle(10, 5);   
rect.getArea();     

console.log(rect);
console.log(rect.getArea());

