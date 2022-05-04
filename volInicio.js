const controlV = document.querySelector('#control');
const inicio = document.querySelector('.inicio');
const btnIni = document.querySelector('#btn-vol-ini');
const contN = document.querySelector('#contN');

btnIni.addEventListener('click', ()=>{
    inicio.classList.toggle("off");
    controlV.classList.toggle("off");
    btnIni.style.display = "none";
    contN.value = "1";
});