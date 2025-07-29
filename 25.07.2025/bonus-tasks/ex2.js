const Colors = {
    red: Symbol('Red'),
    green: Symbol('Green'),
    blue: Symbol('Blue'),

}

const colorMap = new Map(Object.entries(Colors).map(([key, value]) => [value, key]));

function getColor(symbol)
{
    return colorMap.get(symbol) || "Given unknown color."; 
}

console.log(getColor(Colors.red));
console.log(getColor(Colors.yellow));