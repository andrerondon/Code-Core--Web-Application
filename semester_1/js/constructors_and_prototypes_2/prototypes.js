function Counter(x) {
    this.count = x;
//     this.Increament = function(){
//          this.count += y;
//     }
//     this.now = function() {
//         return this.count;
//     }
//     this.Decreament = function(){
//         this.count -= z;
//    }
  };
 
  Counter.prototype.Increament = function (y){
      this.count += y;
  }

  Counter.prototype.now = function (){
    return this.count;
   }

   Counter.prototype.Decreament = function (z){
       this.count -= z
   }

 const count1 = new Counter(5);

 console.log(count1.now());
 count1.Increament(2);
 count1.Increament(2);
 count1.Increament(2);
 console.log(count1.now());
 count1.Decreament(2);
 console.log(count1.now());

 
 