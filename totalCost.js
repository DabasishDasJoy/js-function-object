const cart = [
    {item: "shoe", price: 1200, quantity: 2}, 
    {item: "shirt", price: 500, quantity: 4}, 
    {item: "t-shirt", price: 300, quantity: 5}, 
    {item: "pant", price: 2000, quantity: 2}, 
    {item: "bag", price: 800, quantity: 8}, 
]

function totalCost(cart){
    let totalCost = 0;

    for(let i = 0; i<cart.length; i++)
    {
        totalCost += cart[i].price * cart[i].quantity;
    }

    return totalCost;
}

console.log(totalCost(cart));