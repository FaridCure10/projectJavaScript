let clap= new Audio('sounds/clap.wav');
let boom= new Audio('./sounds/boom.wav');
let hihat= new Audio('./sounds/hihat.wav');
let kick= new Audio('./sounds/kick.wav');
let openhat= new Audio('./sounds/openhat.wav');
let ride= new Audio('./sounds/ride.wav');
let snare= new Audio('./sounds/snare.wav');
let tink= new Audio('./sounds/tink.wav');
let tom= new Audio('./sounds/tom.wav');



const keys=Array.from(document.querySelectorAll('.drum-key'));
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown',playSound);
keys.forEach(key => {
    key.addEventListener('click',playSound)
})

function playSound(e){
    let valorF = '';
    if(!keys) return;

    if(e.type == 'keydown'){
        const keyValue = document.querySelector(`div[data-key="${e.keyCode}"]`);
        keyValue.classList.add('bright');
        valorF = e.keyCode;
    }else if(e.type == 'click'){
        let $this = this;
        let clicKey = $this.getAttribute('data-key');
        const keyValue = document.querySelector(`div[data-key="${clicKey}"]`);
        keyValue.classList.add('bright');
        valorF = clicKey;
    }
    switch (parseInt(valorF)) {
        case 65:
            clap.currentTime=0;
            clap.play();
            break;
        case 83:
            hihat.currentTime=0;
            hihat.play();
            break;
        case 68:
            kick.currentTime=0;
            kick.play();
            break;
        case 70:
            openhat.currentTime=0;
            openhat.play();
            break;
        case 71:
            boom.currentTime=0;
            boom.play();
            break;
        case 72:
            ride.currentTime=0;
            ride.play();
            break;
        case 74:
            snare.currentTime=0;
            snare.play();
            break;
        case 75:
            tom.currentTime=0;
            tom.play();
            break;
        case 76:
            tink.currentTime=0;
            tink.play();
        default:
            break;
    }
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('bright');
}