function fib(num){
    let prev = 0, fibNum = [0, 1];

    for(let i = 2; i < num; i++){
        fibNum.push(fibNum[i - 1] + fibNum[i - 2]);
    }

    return fibNum;
}

console.log(fib(10));