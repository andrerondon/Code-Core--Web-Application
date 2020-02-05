const x = process.argv[2]
const y = process.argv[3]


if (x && y) {
    // console.log('I received two arguments');
    for (let a =1; a<= x; a++){
    // console.log('I am in a loop');
    if(a % y ===0 ){
        console.log(a);
               
        }
    }
}
else {
    console.log('Expected two numbers');
}
// //for (a && b) {
// for(let c=1; c<=a; c++){      // never use ; here...
//     if (c%b==0) {
//     console.log(c);   
//     }
//     else  {
//         console.log('Expected two numbers');
//     }
//       };
     

