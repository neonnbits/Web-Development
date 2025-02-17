function isPalindrome(str) {
    str = str.toLowerCase();
    let j = str.length-1;
    for(let i=0; i<str.length/2; i++){
        if(str[i] !== str[j-i]) return false;
    }

    return true;

    // return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
}

console.log(isPalindrome("raceCar"));