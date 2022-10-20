let cardNumbers = Number(prompt("Jogo da Memória! Qual o número de cartas que deseja jogar? (4 a 14 cartas)"));
    while(cardNumbers<4 || cardNumbers > 14 || cardNumbers%2 !== 0){
        alert("Número de cartas inválido");
        cardNumbers = Number(prompt("Jogo da Memória! Qual o número de cartas que deseja jogar? (4 a 14 cartas)"));
    }

let cardsList = [];
for( let i=0; i< cardNumbers; i++){
    let cardL = document.querySelector(".card");
    cardsList.push(cardL);
}
//ok

let containercardjs = document.querySelector(".container-cards");
 containercardjs.innerHTML = '';
for(let i = 0; i<cardsList.length; i++){
    containercardjs.innerHTML += `<div class="card" onclick="clickedCard(this)">
    <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png">
    </div>`
    ;
}

function clickedCard(element){
    const flipCard = document.querySelector(element);
    flipCard.classList.toggle("click");
}