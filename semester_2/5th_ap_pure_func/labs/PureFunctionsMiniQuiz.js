// Given this environment and list of console.logs determine wether the function being called is pure or not.


console.log('Math.random(): ',Math.random()); //no
console.log('Math.random(): ',Math.random()); //no
console.log('Math.random(): ',Math.random()); //no

console.log('Math.floor(5.3333)', Math.floor(5.3333)); //yes
console.log('Math.floor(5.3333)', Math.floor(5.3333)); //yes

console.log('Math.floor(5.8999)', Math.floor(5.8999));  //yes
console.log('Math.floor(5.8999)', Math.floor(5.8999));   //yes

console.log('Math.floor(8.3333)', Math.floor(8.3333));  //yes
console.log('Math.floor(8.3333)', Math.floor(8.3333));  //yes//yes

const arr = [1,2,3,4,5,6]; 
function getLast(arr) {   //no
return arr.pop();s  //yes
}

console.log('getLast(arr)', getLast(arr));
console.log('getLast(arr)', getLast(arr));
console.log('getLast(arr)', getLast(arr)); //no

const GLOBAL_VARIABLE = 4

function multiplyByGlobal(n){  // yes not pure function
    return n * GLOBAL_VARIABLE;
}



console.log('multiplyByGlobal(3)', multiplyByGlobal(3));
console.log('multiplyByGlobal(3)', multiplyByGlobal(3));
console.log('multiplyByGlobal(3)', multiplyByGlobal(3)); // yes
console.log(GLOBAL_VARIABLE);
