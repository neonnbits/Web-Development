function calculateTime(n) {
    const past = Date.now();
    let sum = 0;
    
    for(let i = 0; i<n; i++){
        sum += i;
    }

    const now = Date.now();
    console.log((now-past)/1000);
}

calculateTime(10000000000);