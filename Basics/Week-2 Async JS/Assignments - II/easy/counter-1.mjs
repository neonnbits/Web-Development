
// setInterval(() => console.log(counter++), 1000); // using setInterval


//using setTimeout

export async function counter(start){
    await sleep(1000);
}

function sleep(ms){
    return new Promise((res, rej) => setTimeout(res, ms));
}
