/*
    first 100 --> 100tk
    101-200 -> 90
    200<tickets ---> 70;
*/


function totalPrice(quantity){
    const first100 = 100,
        second100 = 90, 
        rest = 70;
    let cost = 0, quant = quantity % 100;
    if(quantity <= 100){
        cost = quantity * first100;
    }

    if(quantity > 100 && quantity <= 200)
    {
        cost = 100*first100 + (quantity - 100)*second100;
    }

    if(quantity > 200){
        cost = 200 * first100 + (quantity - 200)*rest;
    }

    return cost;
}


console.log(totalPrice(176));


const nayoks=['“Bangla Bhai”','”English Bhai”','”Korean Bhai ”','”Turkish Bhai ”'];

for(const nayok of nayoks){
    console.log(nayok);
}


let sum=0; 
for( let i = 0; i<=3;i++){ 
sum = sum + i; 
}

console.log(sum);