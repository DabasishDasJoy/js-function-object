function uniqueNames(names){
    const unique = [];
    for(let i = 0; i<names.length; i++){
        if(!unique.includes(names[i])){
            unique.push(names[i]);
        }
    }

    return unique;
}


const names = ['abul', 'kabul', 'joy', 'joy', 'kabul', 'babul', 'babul', 'abul', 'kabul'];


console.log(uniqueNames(names));
