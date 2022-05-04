const sec1 = document.querySelector('.sec1');
const fuego = document.querySelector('#fuego');
const btnSoplar = document.querySelector('#btnSoplar');
const prog = document.querySelector('#prog');
const winBox = document.querySelector('#win');
const btnReplay = document.querySelector('#btnReplay');
const btnNext = document.querySelector('#btnNext');
const coment2 = document.querySelector('#coment');
const soundSec1 = document.querySelector('#sound');

let valorProg = 0;
let up = 2;

function update(){
    prog.value = valorProg;

    if (valorProg === 100) {
        youWin();
    }
}

update();


function UpProg(){
    if (valorProg < 130) {
        valorProg += up;
    }
    update();    
}

btnSoplar.addEventListener('click', UpProg);

function updateFuego(){
    if (valorProg > 0) {
        fuego.style.animationName = "soplando";
    } else {
        fuego.style.animationName = "mover";
    }
}

function controlIntervalos(){
    setInterval(() => {
        if (valorProg > 0 ) {
            valorProg -= 1;
        } 
        update();    
    }, 150);

    setInterval(()=>{
        updateFuego();
    }, 1700);    
}

controlIntervalos();

function youWin(){
    winBox.style.display = "block";
}

function replay() {
    winBox.style.display = "none";
    valorProg = 0;
    updateFuego();
    update();    
}

btnReplay.addEventListener('click', replay);

btnNext.addEventListener('click', ()=>{
    sec1.classList.toggle('off');
    coment2.classList.toggle('off');
    soundSec1.src = "./Ali Gatie - It_s You (100_ EASY PIANO TUTORIAL)(MP3_128K).mp3";
});

