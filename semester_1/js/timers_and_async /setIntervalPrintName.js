function printName (x){
    let count =0;
    const Name = setInterval(function (){
        console.log(x);
        count++;
        if(count>=10){
            clearInterval(Name);
        }
    },1000);     
}
printName("André Rondon");