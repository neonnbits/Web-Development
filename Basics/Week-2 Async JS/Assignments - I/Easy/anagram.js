function isAnagram(str1, str2){
    if(str1.length !== str2.length) return false;
    let freq = {};
    for(let char of str1.toLowerCase()){
        freq[char] = (freq[char] || 0) + 1;
    }
    for(let char of str2.toLowerCase()){
        if(!freq[char]) return false;
        freq[char]--;
    }

    return true;

    // return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}

console.log(isAnagram("spar", "rasp"));