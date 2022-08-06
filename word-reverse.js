function reverseWord(sen){
    let splitted = sen.split(" ");
    let reversed = [];
    for(let i = splitted.length - 1; i>=0; i--){
         reversed.push(splitted[i]);
    }

    return reversed.join(" ");
}

let sen = "I am a good boy";
console.log(reverseWord(sen));
