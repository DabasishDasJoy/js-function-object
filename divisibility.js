function isDivisibleByThree(number){
    return number % 3 === 0;
}
function isDivisibleByFive(number){
    return number % 5 === 0;
}

function showFooBar(num){
    for(let i = 1; i <= 50; i++){
        if(isDivisibleByFive(i) && isDivisibleByThree(i)){
            console.log('foobar');
        }
        else if(isDivisibleByThree(i)){
            console.log('foo');
        }
    
        else if(isDivisibleByFive(i)){
            console.log('bar');
        }

        else{
            console.log(i);
        }
    }

}

console.log(showFooBar());