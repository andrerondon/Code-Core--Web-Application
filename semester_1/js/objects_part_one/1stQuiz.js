// write a function that returns the largest number of an array

 // test cases

 // maxNumber([1,2,3]); // returns 3
 // maxNumber([4,5,3,3,3,1]); // returns 5



function maxNumber (arr){
    let maxnum =0
    for (let index of arr){
        if(index > maxnum){
            maxnum = index;

        }
    }
    return maxnum;
}
console.log(largestnum([4,5,3,3,3,1,10]));




function maxNumber (arr){
    let maxnum = 0
    // for (let index of arr){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > maxnum){
            maxnum = arr[i];

        }
    }
    return maxnum;
}
console.log(maxNumber([4,5,3,3,3,1,10]));
 