function sum() {
    var s = 0;
    for (var i=0; i < arguments.length; i++) {
        s += arguments[i];
        if(typeof(s)!=="number")
        {
         console.log("false")
        }
    }
        console.log(s);
 }
 sum(1,13 ,56, 4,3, 2,  7, 3,'hghj')