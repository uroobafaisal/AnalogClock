let hourhand = document.querySelector("#hrhand");
let minutehand = document.querySelector("#minhand");
let secondhand = document.querySelector("#sechand");

setInterval(() => {
    let today = new Date();

    let minhand = today.getMinutes();
    let min_move = 6 * minhand;
    minutehand.style.transform = `rotate(${min_move}deg)`;
    let hrhand = today.getHours();
    let hr_move = (30 * hrhand) + (minhand / 2);
    hourhand.style.transform = `rotate(${hr_move}deg)`;
    let sechand = today.getSeconds();
    let sec_move = 6 * sechand;
    secondhand.style.transform = `rotate(${sec_move}deg)`;
    var audio = new Audio('ticking.mp3');
    audio.play();
}, 1000);