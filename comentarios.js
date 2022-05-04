const coment = document.querySelector('#coment');
const imgCom = document.querySelector('#img-com');
const textCom = document.querySelector('#text-com');
const btnComNext = document.querySelector('#btn-com-next');
const btnComBack = document.querySelector('#btn-com-back');
const soundC = document.querySelector('#sound');

let cont = 0;

let objCom = [
    {
        img: "./r2.png",
        bottom: "",
        right: "",
        tex: `¡¡¡HOLAAAA AMOOORRR!!!... Bueno amor, primero que todo ¡¡¡FELIIIZZZZ CUMPLEAÑOOOSSS!!!, 
            espero de verdad estés teniendo un excelente día.`,
        pass: false,
    },{
        img: "./r1.png",
        bottom: "",
        right: "",
        tex: `Esta vez hasta con diálogos a lo juego rpg indi y música de ambiente eh amor jejeje.`,
        pass: false,
    },{
        img: "./r2.png",
        bottom: "",
        right: "",
        tex: `Así amor jejeje, a lo que iba, como puedes ver hay una trota a mis espaldas, y ¿Sabes lo que eso significa amor? ¡¡¡CANCION DE CUMPLEAÑOS!!! chiiiii.`,
        pass: false,
    },{
        img: "./r1.png",
        bottom: "",
        right: "",
        tex: `P.D: si quieres seguir escuchando el tema de fonto amor, espera un poco antes de darle a "Siquiente".
        `,
        pass: false,
    },{
        img: "",
        bottom: "",
        right: "",
        tex: `<<< Siguiente >>>`,
        pass: true,
    },{
        img: "./r2.png",
        bottom: "",
        right: "",
        tex: `Jejeje ya terminada la canción amor, ¿Sabes que sigue?  SOPLAARRR LAA VELAAA!!! Y PEDIR UN DESEOOOO!!!
        `,
        pass: false,
    },{
        img: "./r3.png",
        bottom: "",
        right: "",
        tex: `Pero hay un problema amor la vela se resiste en apagarse y 
        si no podemos apagarla no podrás pedir tu deseo de cumpleaños. :( 
        `,
        pass: false,
    },{
        img: "./r4.png",
        bottom: "",
        right: "",
        tex: `No podemos permitir eso amor, pero sé que mi niña puede con cualquier cosa, así que le doy la importante misión de apagar la vela y pedir su deseo.
        `,
        pass: false,
    },{
        img: "./r1.png",
        bottom: "",
        right: "",
        tex: `Sopla lo más rápido y fuerte amor, no dejes que la vela pueda recuperar su llama. Mucha suerte Amor, confió en que podrás. :3
        `,
        pass: false,
    },{
        img: "",
        bottom: "",
        right: "",
        tex: `<<< Siguiente >>>`,
        pass: true,
        music: "./The Neighbourhood - Sweater Weather - Piano Tutorial   SHEETS(MP3_128K).mp3"
    },{
        img: "./r2.png",
        bottom: "",
        right: "",
        tex: `¡¡¡ESO MI AMOOORRR!!! Sabía que podrías, pero era obvio, mi niña puede con todo, ¿Pidió su deseo amor? Jejeje eso espero amor.
        `,
        pass: false,
    },{
        img: "./r4.png",
        bottom: "",
        right: "",
        tex: `Ya que apago la vela amor, toca abrir su regalo, admito que no es lo que quería pero amor, pero espero le guste mi amor. :3
        `,
        pass: false,
    },{
        img: "",
        bottom: "",
        right: "",
        tex: `<<< Siguiente >>>`,
        pass: true,
    },{
        img: "./r4.png",
        bottom: "",
        right: "",
        tex: `Bueno amor, espero le haya gustado, y pues hasta aquí llega la app amor, le dejo un índice para volver a cualquier parte de la app. 
        `,
        pass: false,
    },{
        img: "./r2.png",
        bottom: "",
        right: "",
        tex: `Se encontrará desde ahora activo en el inicio amor, espero hallas disfrutado de esta pequeña app, y que cumplas muchos más mi niña ¡¡¡TE AMOOOO!!!... 
        `,
        pass: false,
    },,{
        img: "./r1.png",
        bottom: "",
        right: "",
        tex: `También le dejo un último tema por su quiere escucharlo, espero antes de dar a siguiente. :3
        `,
        pass: false,
    },{
        img: "",
        bottom: "",
        right: "",
        tex: `<<< Siguiente >>>`,
        pass: true,
    }
];

function updateCom(){
    
    if (objCom[cont].img) {
        imgCom.style.display = "block";
        imgCom.src = objCom[cont].img;
    } else {
        imgCom.style.display = "none";
    }
    
    textCom.innerText = objCom[cont].tex;

    if (objCom[cont].pass) {
        coment.classList.toggle('off');
        
        if (objCom[cont].music) {
            soundC.src = objCom[cont].music;
        } else {
            soundC.src = '#';
        }
    }
  
}

updateCom();

function n() {
    console.log('ok');
}

function upCont(){
    if (cont < ( objCom.length)) {
        cont++;
    }

    updateCom();
}

function downCont(){
    if (cont > 0) {
        cont--;
    }

    updateCom();
}

btnComNext.addEventListener('click', upCont);
btnComBack.addEventListener('click', downCont);