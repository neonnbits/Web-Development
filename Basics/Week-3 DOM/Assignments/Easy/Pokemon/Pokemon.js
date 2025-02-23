function generateFields(){
    let root = document.getElementById("root");
    root.innerHTML = "";
    let total = document.getElementById("total");
    num = total.value;
    if(num > 10){
        alert("Input must be less than or equal to 10.");
        return;
    }
    for(let i=0; i<num; i++){
        let item = document.createElement("p");
        item.innerHTML = `<p>${i+1}. <input id="ip-${i+1}"/></p>`;
        root.appendChild(item);
    }
    let submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.onclick = async function (){
        //sanity check
        for(let i=0; i<total.value; i++){
            let ip = document.getElementById(`ip-${i+1}`);
            if(!ip.value){
                alert("Please enter values in all text boxes or reduce the entries.");
                return;
            }
        }
        let finalRoot = document.createElement("div");
        let promises = [];
        for(let i=0; i<total.value; i++){
            let ip = document.getElementById(`ip-${i+1}`);
            const res = promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${ip.value}`).then(res => res.ok ? res.json() : null));
            
        }
        let results = await Promise.all(promises);
        results.forEach((json, i) => {
            if (!json) {
                alert(`Invalid Pokémon at position ${i+1}.`);
                return;
            }
            let item = document.createElement("div");
            let name = document.createElement("p");
            let img = document.createElement("img");
            name.textContent = `${i+1}. Name: ${json.name}`;
            img.src = json.sprites.front_default
            item.appendChild(name);
            item.appendChild(img);
            finalRoot.appendChild(item);
        });
        root.innerHTML = finalRoot.innerHTML;
    }
    root.appendChild(submitBtn);
}