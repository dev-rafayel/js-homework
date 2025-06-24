function Car(mark, model, year)
{
    this.mark = mark;
    this.model = model;
    this.year = year;    
}

Car.prototype.getDescription = function() 
{
    return `${this.mark}, ${this.model}, ${this.year}`    
}

const car1 = new Car("BMW", "M5 E60", 2004);
console.log(car1.getDescription());