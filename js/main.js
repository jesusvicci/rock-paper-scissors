let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

let player;
let cpu;

rock.addEventListener("click", () => {
    player = 1;
});

paper.addEventListener("click", () => {
    player = 2;
});

scissors.addEventListener("click", () => {
    player = 3;
});

