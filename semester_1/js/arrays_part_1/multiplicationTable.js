// print out the multiplication table from 5 to 5;
const topNumbers = [1, 2, 3, 4, 5];
const leftNumbers = [1, 2, 3, 4, 5];

for (let a of topNumbers) {
  const row = [];
  for (let j of leftNumbers) {
    row.push(topNumber * leftNumber);
  }
  console.log(row);
}

for (let i = 0; i < topNumbers.length; i++) {
  const row = [];
  for(let j = 0; j < leftNumbers.length; j++) {
    row.push(topNumbers[i] * leftNumbers[j]);
  }
  console.log(row);
}