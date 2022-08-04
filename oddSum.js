const numbers = [5, 7, 8, 10, 9, 30]
function isEven(number) {
    return number % 2 == 0;
}

function oddSum(number) {
    let i = 0, sum = 0;
    while (i < numbers.length) {
        if (!isEven(numbers[i])) {
            sum += numbers[i];
        }

        i++;
    }

    return sum;
}

console.log(oddSum());

