function printName (x){
    let count =0;
    const Name = setInterval(function (){
        console.log("jugraj singh");
        count++;
        if(count>=x){
            clearInterval(Name);
        }
    }, 1000);     
}
printName(6);