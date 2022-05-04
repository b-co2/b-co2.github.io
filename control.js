const inputDate = document.querySelector('#date');
const btnDate = document.querySelector('#btnDate');
const control = document.querySelector('#control');
const boxError = document.querySelector('.error');
const sound = document.querySelector('#sound');
const com =  document.querySelector('#coment');

function eval(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getDay();
    let month2 = (month >= 10) ? month : '0' + month;
    let year = date.getFullYear();
    let totalDate = year + '-' + month2 + '-' + day;

    
     if (day >= 4 && month >= 5 && year >= 2022 ) {
         if (totalDate === inputDate.value) {
            control.classList.toggle('class', 'off');
         }
     } else {
         boxError.style.display = 'block';
     }

    sound.src = "./music/Infinity - Jaymes Young (Piano Tutorial) _ Eliab Sandoval(MP3_128K).mp3";
}

function temp() {
    control.classList.toggle('off');
    sound.src = "./Infinity - Jaymes Young (Piano Tutorial) _ Eliab Sandoval(MP3_128K).mp3";
    com.classList.toggle('off');
}

btnDate.addEventListener('click', temp);

