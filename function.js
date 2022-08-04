function Summution(nums){
    var result = 0;
    for (let index = 0; index < nums.length; index++) {
        result += nums[index];
    }

    return result;
}

var array = [8, 6, 4, 2, 6];
console.log(Summution(array));