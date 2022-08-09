const chair = 3,
    table = 10, 
    bed = 50;


function woodCalculation(numerOfChair, numberOfTable, numberOfBed){

    return numberOfBed*bed + numberOfTable*table + numerOfChair*chair;

}

console.log(woodCalculation(5, 6, 7));