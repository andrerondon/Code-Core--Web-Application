// concept of objetc 


// let array = {
//     name: 'André',
//     age: 18
// }

// function info(array){
//     return array.name + ' is ' + array.age + ' years old '
// }


// console.log(info(array));

let user1 = {
    name: 'André',
    age: 18
}

let user2 = {
    name: 'Priscila',
    age: 50
}


function info(obj){
    return obj.name + ' is ' + obj.age + ' years old '
    
}



function couple(user1, user2){
    return user1.name + ' is marrige with ' + user2.name
}
// OR 

// function couple(obj1, obj2){
//     return obj1.name + ' is marrige with ' + obj2.name
// }

function loopObject(obj){
    // for (let i = 0; i < Object.keys(obj).length; i++){
    //     console.log(`person name is  ${i}  person age is ${obj[i]} `);
    //      console.log(i);
         
    // }
    for (let i in obj){
        // console.log(`person name is  ${property}  person age is ${obj[property]} `);
        console.log(i);
        console.log('/////////');
        console.log(obj[i]);
        // console.log('/////////');
        // console.log();
        // console.log('/////////');
        // console.log(obj.name[i]);
    }

}

loopObject(user1, user2)

// console.log(info(user1));
// console.log(info(user2));
// console.log(couple(user1, user2));
// console.log(loopObject(obj));