console.log(Math.random()); //generates random number between 0 to 1 default.
console.log(Math.floor(Math.random()*10)); //generates random number between 0 to 9 and integers.
console.log(Math.floor(Math.random()*10)+1); //generates random number between 1 to 10 default.
// console.log(Math.random()); //generates random number between 0 to 1 default.

for (let index = 0; index < 20; index++) {
    console.log(Math.floor(Math.random()*10)+1);
}

// ---------------Proper Random Function-------------

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }