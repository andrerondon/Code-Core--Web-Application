const myObj = {
    a: 1,
    b: 2,
    c: 3
};

console.log(Object.keys(myObj));
console.log(Object.values(myObj));


const target = { a: 1};
const source1 = { b: 2};
const source2 = { c: 3};

const newObject = Object.assign(source1, myObj);
console.log(newObject);
console.log(source2);
console.log(target);
console.log(source1);


const target = { a: 1};
const source1 = { b: 2};

const newObject = Object.assign(target, source1);
const newCopy = Object.assign({}, newObject);

console.log(newObject);
console.log(target);
console.log(newCopy);

if(newObject === target){
    console.log("True");
    
} else {
    console.log("false");
    
}

const obj1 = { a: "hello"};
const obj2 = { b: "world"};
const obj3 = {obj1, obj2};

const copy = {obj1};
const obj4 = {
    a : "Hello",
    b : "World"
}
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(copy);

console.log(Object.values(obj4));

