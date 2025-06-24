const Students = {
    Alice: 20,
    John: 32,
    Bob: 8,
}

const entries = Object.entries(Students);
const filtered = entries.filter(([key, value]) => value >= 18); 
const result = Object.fromEntries(filtered)
console.log(result);
