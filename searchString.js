// ----------------Searching substring can be in different ways------------------------
const lyrics = "Tumi bondhu Kala paKhi Ami jeno ki, Boshonto Kale Tomay Bolte Pari Ni, Shada Shada Kala Kala Rong Jomeche Shada Kala";
const searchString = "Pakhi";

// ----------------------Using .includes()-------------------------
const doesExist = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(doesExist);


// ---------------------------Using indexOf()-----------------------------
// indexOf() returns the index fo first occurence of the paramenter
// LastIndexOf() returns the last occurence of the parameter.

if(lyrics.toLowerCase().indexOf(searchString.toLowerCase()) !== -1){
    console.log("Content found");
}
else{
    console.log("Content not found");
}

// -----------------------startWith() & endsWith()------------------------------

const fileName = "myDocument.pdf";

console.log(fileName.endsWith('.pdf'));
console.log(fileName.toLowerCase().startsWith('my'));