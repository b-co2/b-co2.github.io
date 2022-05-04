const regalos = document.querySelector('.regalos');
const caja = document.querySelector('.caja');
const tapa = document.querySelector('.tapa');
const lazo = document.querySelector('.lazo');
const cinta = document.querySelector('.cinta');

const btnOpen = document.querySelector('#btn-abrir');

const regalo = document.querySelector('.regalo');
const audioMus = document.querySelector('.text-re');
const btnConti = document.querySelector('#btn-conti');
const coment3 = document.querySelector('#coment');

const soundReg = document.querySelector('#sound');

function OpenAll(){
    caja.style.animationName = "caja";
    tapa.style.animationName = "openc";
    lazo.style.animationName = "openL";
    cinta.style.animationName = "openC";

    caja.style.animationFillMode = "forwards";
    tapa.style.animationFillMode = "forwards";
    lazo.style.animationFillMode = "forwards";
    cinta.style.animationFillMode = "forwards";

    caja.style.animationIterationCount = "unset";
    tapa.style.animationIterationCount = "unset";
    lazo.style.animationIterationCount = "unset";
    cinta.style.animationIterationCount = "unset";

    onRegalo();
}

function onRegalo(){
    regalo.style.animationName = "reg";
    audioMus.style.animationName = "born";

    setInterval(() => {
        changeBtn();
    }, 2000);
}

function changeBtn (){
    if (audioMus.ended) {
        btnOpen.style.display = "none";
        btnConti.style.display = "block";
    }
}

btnOpen.addEventListener('click', OpenAll);

btnConti.addEventListener('click', ()=>{
    regalos.classList.toggle("off");
    coment3.classList.toggle("off");
    soundReg.src = "./MY BLOOD (twenty one pilots) - EASY Piano Tutorial   SHEETS(MP3_128K).mp3";
});