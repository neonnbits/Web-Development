function findLargestElement(numbers) {
    if(numbers.length === 0) return null;

    let largest = numbers[0];

    numbers.forEach(e => {
        if(e > largest) largest = e;
    });

    return largest;
}


console.log(findLargestElement([45,29,65,34,16,74,34,23,2]));