const friends = [15, 16, 57, 27, 54, 745];

console.log(typeof friends); // this show array as an object

console.log(Array.isArray(friends)); // to check if the variable is an array or not.

console.log(friends.includes(16)); // to check if a values is present in the array or not...

const newFriends = [86, 78, 77];

const newArray = newFriends.concat(friends); // to join two or more arrays

console.log(newArray);

console.log(newArray.slice(3, 8)); // slicing an array.

const height = [15, 45, 198]

const partial = friends.splice(2, 3, ...height); // here second parameter is the number of elements to be removed
console.log(friends);