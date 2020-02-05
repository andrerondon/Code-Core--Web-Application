function removeSpaces(string) {
    let stringWithNospace = " ";
    for (let i = 0; i < string.length; i++) {
        const character = string [i];
        if (character === " ")
        stringWithNospace += character;
    }

return stringWithNospace;
}
console.log(removeSpaces("the lovo"));

