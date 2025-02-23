let qnum = 0;
let cAnswers = 0;
let option;
let quizData = [];

function submit(){
    if(option === quizData[qnum].correct) cAnswers += 1;
    if(qnum === quizData.length-1){
        let card = document.getElementById("card");
        card.innerHTML = `Quiz finished. ${cAnswers}/${qnum+1} correct answers.`
        return;
    }
    qnum++;
    console.log("here")
    seedData();
}

function seedData(){
    question.innerText = quizData[qnum].question;
    document.querySelectorAll(".optionLabel").forEach((e, index) => {
        let optionKey = ["a", "b", "c", "d"][index];
        e.innerText = quizData[qnum][optionKey];
        e.dataset.id = optionKey;
        e.parentElement.addEventListener("click", () => {
            option = optionKey;
            console.log(option);
        })
    })

    document.querySelectorAll("input[type='radio']").forEach((e) => {
        e.checked = false;
    })
}

async function main(){
    document.querySelectorAll(".item").forEach((e) => {
        e.addEventListener("click", () => {
            const radio = e.querySelector("input[type='radio']");
            if (radio) {
                radio.checked = true;
            }
        });
    });
    let question = document.getElementById("question");
    await fetch("data.json")
        .then(response => response.json())
        .then(data => {
            quizData = data;
        })
        .catch(error => console.error("Error fetching JSON:", error));
    seedData();
}

document.addEventListener("DOMContentLoaded", () => {
    main();
})