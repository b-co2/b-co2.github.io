const audioSec0 = document.querySelector('#audio-sec0');
const btnSec0 = document.querySelector('#btn-sec0-continue'); 
const sec0 = document.querySelector('.sec0');
const coment1 = document.querySelector('#coment');
const soundSec0 = document.querySelector('#sound');

function updateBtnSec0(){
    if (audioSec0.ended) {
        btnSec0.style.display = "block";
    }
}

setInterval(() => {
    updateBtnSec0();
}, 2000);

function conti() {
    sec0.style.display = "none";
    coment2.classList.toggle('off');
    soundSec0.src = "./Daddy Issues -  The Neighbourhood (Piano Tutorial)(MP3_128K).mp3";
}

btnSec0.addEventListener('click', conti);
