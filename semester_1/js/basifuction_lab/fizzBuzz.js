function number(x,y){
    for (i=1;i<=100;i++){
       if(i%x==0 && i%y==0){
           console.log('fizzbuzz x y');
       }
       else if (i%x==0){
           console.log('fizz x');
       }
       else if (i%y==0) {
           console.log('buzz y');
       }
       else {
           console.log(`${i}`);
       }
    
    }
    number(3,5)