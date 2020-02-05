

function printName (){
    console.log("André Rondon");
    
}
for (let i=1;i<=10;i++){
    setTimeout(printName, 2000*i);
}