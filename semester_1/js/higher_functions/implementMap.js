
const even = n % 2 === 0; const pow2 = n => n ** 2;

const numbers = [1, 2, 3, 4, 5, 6];

map(numbers, even); // [false, true, false, true, false, true] map(numbers, n => n.toString().repeat(n)); // ['1', '22', '333', '4444', '55555', '666666'] map(numbers, pow2); // [1, 4, 9, 16, 25, 36]

const names = ["Cersei", "Jon", "Arya"];

map(names, name => Hi, ${name}!); // ['Hi, Cersei!', 'Hi, Jon!', 'Hi, Arya!']


