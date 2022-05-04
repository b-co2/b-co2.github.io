const controlVol = document.querySelector('#control');
const sec0Indi = document.querySelector('.sec0');
const sec1Indi = document.querySelector('.sec1');
const regalosIndi = document.querySelector('.regalos');
const indice = document.querySelector('.indice');
const btnIndice = document.querySelector('#btnIndice');
const contNindi = document.querySelector('#contN');
const x = document.querySelector('#x');
const cumMus = document.querySelector('#cum-mus');
const velaIndi = document.querySelector('#vela');
const rega = document.querySelector('#rega');
const winBoxIndi = document.querySelector('#win');


let i = setInterval(() => {
    if (contNindi.value === "1") {
        btnIndice.style.display = "block";
       clearInterval(i); 
    }

}, 2000);

btnIndice.addEventListener('click', ()=>{
    indice.style.display = "flex";
    controlVol.classList.toggle('off');
});

x.addEventListener('click', ()=>{
    indice.style.display = "none";
    controlVol.classList.toggle('off');
});

cumMus.addEventListener('click' , ()=>{
    indice.style.display = "none";
    sec1Indi.classList.toggle('off');
    regalosIndi.classList.toggle('off');
    winBoxIndi.style.display = "none";
});

velaIndi.addEventListener('click' , ()=>{
    indice.style.display = "none";
    sec0Indi.classList.toggle('off');
    regalosIndi.classList.toggle('off');
});

rega.addEventListener('click' , ()=>{
    indice.style.display = "none";
    sec0Indi.classList.toggle('off');
    sec1Indi.classList.toggle('off');
});