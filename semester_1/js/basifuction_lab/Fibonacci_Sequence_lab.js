function fibo (number) {
    var b = []
    var n1 = 0
    var n2 = 1
    while (b.length<number){
        b.push (n1+n2);
        n2=n1+n2
        n1=n2

    }
    
    console.log (b.join(','))
}

fibo(8)


//for (let sequence=0; sequence<=10; sequence++)