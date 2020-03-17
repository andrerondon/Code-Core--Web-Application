// Lab - Password Checker
// Ask the user for a password in a variable called 'password' then:

// If the password is longer than 12 characters, log to the console "Too long!".
// If the password is less than 8 characters, log to the console "Too short!".
// Otherwise, log to the console "Just right!".

function passwordChecker(password){
    for (let i = 0; i < password.length; i ++){
        if (password.length < 8){
            return 'Too short'
        }else if (password.length < 12){
            return 'Too long'
        } else{
            return 'Just Rigth'
            
        }
    }
    return password
}

console.log(passwordChecker("1234567891011"));
console.log(passwordChecker("123456"));
console.log(passwordChecker("12345678"));
