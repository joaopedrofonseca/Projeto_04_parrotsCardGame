let cardNumbers = Number(prompt("Jogo da Memória! Qual o número de cartas que deseja jogar? (4 a 14 cartas)"));
    while(cardNumbers<4 || cardNumbers > 14 || cardNumbers%2 !== 0){
        alert("Número de cartas inválido");
        cardNumbers = Number(prompt("Jogo da Memória! Qual o número de cartas que deseja jogar? (4 a 14 cartas)"));
    }

let containercardjs = document.querySelector(".container-cards");
 let imgs = [
    'bobrossparrot',
    'bobrossparrot',

    'explodyparrot',
    'explodyparrot',

    'fiestaparrot',
    'fiestaparrot',

    'metalparrot',
    'metalparrot',

    'revertitparrot',
    'revertitparrot',

    'tripletsparrot',
    'tripletsparrot',

    'unicornparrot',
    'unicornparrot'
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
    <div class="card" id="${imgsrandom[i]}" onclick="clickedCard(this)">
        <img src="./imagens/${imgsrandom[i]}.gif">
        <div class="back">
            <img src="./imagens/back.png">
        </div>
    </div>
    `
    ;
}

function clickedCard(element){
    if(activatedCard === false){firstClickedCard(element);
    } else{
        secondClickedCard(element);
    }

}

function hideback(element){
    const backcard = element.querySelector(".back");
    backcard.classList.add("hide");

}


let playTimes = 0;
let activatedCard = false;
let firstcardName;
let cardsPlayed = [];
let successfullPlay = Number(0);
let pairs = Number(cardNumbers/2);
let endGame = false;



function firstClickedCard(element){
        element.classList.remove("flip");
        element.classList.add("click");
        setTimeout(hideback, 300, element);
        activatedCard = true;

        firstcardName = element.id;
        cardsPlayed.push(element);
        playTimes++;
    }

function secondClickedCard(element){
    element.classList.remove("flip");   
    element.classList.add("click");
    setTimeout(hideback, 300, element);

    if(element.id === firstcardName){
        playTimes++;
        activatedCard = false;
        successfullPlay++;
        cardsPlayed.shift();
        setTimeout(endgame,1000);
        
    } else{
        playTimes++;
        activatedCard = false;
        cardsPlayed.push(element);
        setTimeout(untapCards,1000);
    }
}

function untapCards(){
    for(let i =  0; i<cardsPlayed.length; i++){
    cardsPlayed[i].classList.remove("click");
    cardsPlayed[i].classList.add("flip");
    let back = cardsPlayed[i].querySelector(".back");
    back.classList.remove("hide");
    }
    cardsPlayed.shift();
    cardsPlayed.shift();
}

function endgame(){
    if(pairs === successfullPlay){
        endGame = true;
        if(endGame === true && cardsPlayed[1] === undefined){
            alert("Você ganhou em "+playTimes+" jogadas!");
        }
    }
}
