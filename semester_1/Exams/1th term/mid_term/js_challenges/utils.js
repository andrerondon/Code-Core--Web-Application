// Write a JavaScript constructor function 'Utils' that has the following methods

// 1. A method that convert all even letters from the given string to upper case
// 2. A method that returns the mid charactor(s) of the string
// 3. A method that returns frequency of each letter from the given string
// 4. A method that sorts the given string alphabetically




function Utils(string) {
    this.string = string

        this.toUpperEven = function (upper) {
            let string = " ";
            for (let i =0; i<upper.length;i++){
                if (i%2!==0){
                    string+= upper[i].toUpperCase();
                } 
                else {
                    string+=upper[i].toLowerCase();
                }
            }
            return string;
        }


        this.findMid = function(center){
            let string = " ";
            for(let i=0;i<center.length; i++){
                if(center.length%2==1){
                string=center.length/2;
                return center.substring(string,string+1);
                }
                else {
                string = center.length / 2 - 1;
                return center.substring(string, string + 2)
                }
                }
            }
    
            this.letterFrequency = function(frequency){
                let string={};
                for(i=0;i<frequency.length;i++){
                    let letter = frequency[i];
                    if(frequency[letter]){
                        frequency[letter]++;
                    }
                    else{
                        string[letter]=1;
                    }
                }
                return string;
            }

            this.sortLetters = function(alpha){
                    return alpha.split('').sort().join('');
            }
 
}
 const helpers = new Utils();
//  console.log(helpers.toUpperEven("hindreen")); // hInDrEeN
//  console.log(helpers.findMid("Naveed"))// ve
//  console.log(helpers.findMid("Brandon")) // n
 console.log(helpers.letterFrequency("hindreen")); // { h: 1, i: 1, n: 2, d: 1, r: 1, e: 2 }
 console.log(helpers.sortLetters("CodeCore")); // ccdeeoor
//  console.log(helpers.sortLetters("naveed")); // adeenv