const numberX = parseInt(process.argv[2]) // parseInt is used to change a string into a number

const numberY = parseInt(process.argv[3])


if (numberX % numberY == 0) {

    console.log (`${numberX} is divided by ${numberY} has no remainder`)

} 

else if (numberX < numberY) {

    console.log (`${numberX} is divided by ${numberY} has no remainder`)
    
}   
else {
    const remainder =  numberX % numberY
    console.log (`${numberX} divided by ${numberY} has a remainder ${remainder}`)

} 

