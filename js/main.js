const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

let player = 0;
let cpu = 0;

rock.addEventListener("click", () => {
    player = 1;
});

paper.addEventListener("click", () => {
    player = 2;
});

scissors.addEventListener("click", () => {
    player = 3;
});

function cpuSelection (min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

cpu = cpuSelection(1, 3);
