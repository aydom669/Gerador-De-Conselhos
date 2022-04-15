
/* API URL 
===================================================*/

const apiUrl =  "https://api.adviceslip.com/advice";

/* function que ira retorna a informações da API
====================================================*/

async function getApi(){
    const Resp = await fetch(apiUrl);
    let data = await Resp.json();
    return data;
}

/* ira emprimir as informações da API nos elementos HTML  
===============================================================*/

const getAdvice = () => {
    Promise.resolve(getApi())
    .then((data) => {
        let adviceNumber = document.getElementById("advice-id");
        let adviceText = document.getElementById("advice");

        adviceNumber.innerHTML = "ADVICE # " + data.slip.id;
        adviceText.innerHTML = "\"" + data.slip.advice + "\""
    })
}

getAdvice();

/* fuction que ira sortea o conselho quando o botao for clicado 
========================================================================*/

document.addEventListener("DOMContentLoaded" , (event) => {
    let rolaDados = document.getElementById("btn");
    rolaDados.addEventListener("click", () => {
        getAdvice();
    });
});