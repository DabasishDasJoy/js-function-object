var computer = {
    brand: "HP", 
    processor: "core i8", 
    price: 60000, 
    color: "grey"
}

var propertieName = "price";
//When you know the property name
computer.price = 6000;
computer['price'] = 7000;
//When you doesn't know the property name
computer[propertieName] = 5000;
console.log(computer.price);
var properties = Object.keys(computer);


//To get the property values along with property name
for (let index = 0; index < properties.length; index++) {
    console.log(properties[index] + ":" + computer[properties[index]]);
}

for (const key in computer) {
    console.log(key + " " + computer[key]);
}
