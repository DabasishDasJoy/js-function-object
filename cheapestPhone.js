const phones = [
    {brand: 'Samsung', color: 'blue', camera: '20', price: 22000},
    {brand: 'OnePlus', color: 'blue', camera: '20', price: 62000},
    {brand: 'Xiomi', color: 'blue', camera: '20', price: 562000},
    {brand: 'HTC', color: 'blue', camera: '20', price: 70000},
    {brand: 'iPhone', color: 'blue', camera: '20', price: 8000},
    {brand: 'Nokia', color: 'blue', camera: '20', price: 20000},
    {brand: 'Nothing', color: 'blue', camera: '20', price: 56000},
]


function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 1; i<phones.length; i++){
        if(phones[i].price < cheapest.price){
            cheapest = phones[i];
        }
    }  
    return cheapest.brand; 
}

console.log(cheapestPhone(phones));
phones.sort(function(a, b){return a.price - b.price});

console.log(phones[0].brand);