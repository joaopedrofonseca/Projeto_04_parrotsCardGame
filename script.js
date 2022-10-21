let cardNumbers = Number(prompt("Jogo da Memória! Qual o número de cartas que deseja jogar? (4 a 14 cartas)"));
    while(cardNumbers<4 || cardNumbers > 14 || cardNumbers%2 !== 0){
        alert("Número de cartas inválido");
        cardNumbers = Number(prompt("Jogo da Memória! Qual o número de cartas que deseja jogar? (4 a 14 cartas)"));
    }

let containercardjs = document.querySelector(".container-cards");
 let imgs = [
    'bobrossparrot.gif',
    'bobrossparrot.gif',

    'explodyparrot.gif',
    'explodyparrot.gif',

    'fiestaparrot.gif',
    'fiestaparrot.gif',

    'metalparrot.gif',
    'metalparrot.gif',

    'revertitparrot.gif',
    'revertitparrot.gif',

    'tripletsparrot.gif',
    'tripletsparrot.gif',

    'unicornparrot.gif',
    'unicornparrot.gif'
]

let  imgsrandom=[];
for(let i = 0; i<cardNumbers; i++){
    imgsrandom.push(imgs[i]);
}

function comparador() { 
	return Math.random() - 0.5; 
}

imgsrandom.sort(comparador);


for(let i = 0; i<cardNumbers; i++){
    containercardjs.innerHTML += `
    <div class="card" onclick="clickedCard(this)">
        <img src="./imagens/${imgsrandom[i]}">
        <div class="back">
            <img src="./imagens/back.png">
        </div>
    </div>
    `
    ;
}

let cardsList = [];
for( let i=0; i< cardNumbers; i++){
    let cardL = document.querySelector(".card");
    cardsList.push(cardL);
}

function clickedCard(element){
    element.classList.toggle("click");
    setTimeout(hideback, 300);
    //div card deve rotacionar 
}

function hideback(backcard){
    backcard = document.querySelector(".back");
    backcard.classList.toggle("hide");

}