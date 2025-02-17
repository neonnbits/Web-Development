function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    str.split('').forEach(e => {
        if(vowels.indexOf(e) !== -1) count++;
    });
    return count;
}

console.log(countVowels("Deekshith Pranav"))