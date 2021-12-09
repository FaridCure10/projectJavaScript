const handHour = document.querySelector('.handHours');
const handMins = document.querySelector('.handMins');
const handSeconds = document.querySelector('.handSeconds');

function setClock(){
    const now = new Date();

    let seconds=now.getSeconds();
    let secondsDegrees=((seconds/60)*360)+90;
    handSeconds.style.transform = `rotate(${secondsDegrees}deg)`;

    let mins=now.getMinutes();
    let minsDegrees=((mins/60)*360)+((seconds/60)*6)+90;
    handMins.style.transform = `rotate(${minsDegrees}deg)`;

    let hours=now.getHours();
    let hoursDegrees=((hours/12)*360)+((mins/60)*30)+90;
    handHour.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setClock,1000);
setClock();