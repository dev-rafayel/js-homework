class Product {
    constructor (name, price, description)
    {
        if (new.target === Product)
        {
            throw new Error("Forbidden to call product");
        }
        this.name = name;
        this.price = price;
        this.description = description;
    }


}

class ElectronicsProduct extends Product {
    constructor(name, price, description, warrantyPeriod, brand)
    {
        super(name, price, description);
        this.warrantyPeriod = warrantyPeriod;
        this.brand = brand;
    }

    getDetails()
    {
        return `Product name: ${this.name}, product price: $${this.price}, product description: ${this.description}, Warranty Period ${this.warrantyPeriod}, Brand: ${this.brand}`;
    }
}