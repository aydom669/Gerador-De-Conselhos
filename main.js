


// Url da API

const advice_api_url = "https://api.adviceslip.com/advice";

async function getAPI(){
    const response = await fetch(advice_api_url);
    let data = await response.json();
    return data;
}

function getAdvice(){
    Promise.resolve(getAPI()).then(function(data){
        let adviceNumber = document.getElementById("advice-id");
        let adviceText = document.getElementById("advice");
    
        adviceNumber.innerHTML = "ADVICE # "+data.slip.id;
        adviceText.innerHTML = "\""+data.slip.advice+"\""
    });
}

getAdvice();

document.addEventListener("DOMContentLoaded", (event)=>{
    let rollDice = document.getElementById("btn");

    rollDice.addEventListener("click", function(){
        getAdvice();
    });
});