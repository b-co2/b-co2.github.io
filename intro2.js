const introPage = document.querySelector('#intro');
const controlPage = document.querySelector('#control');
const comentC = document.querySelector('#coment');

function start(){
    setTimeout(() => {
        introPage.classList.toggle('off'); 
    }, 8000);
}

start();

let list = [
    {
        comentPart: 1,
        music: "./music/Infinity - Jaymes Young (Piano Tutorial) _ Eliab Sandoval(MP3_128K).mp3",
    },{
        comentPart: 2,
        music: "The Neighbourhood - Sweater Weather - Piano Tutorial   SHEETS(MP3_128K).mp3",
    }
];


