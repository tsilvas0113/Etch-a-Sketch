function grid(num) {
    const padContainer = document.querySelector('.pad-container');
    padContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    padContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for (let i = 0; i < num * num; i++){
        let div = document.createElement('div');
        div.classList.add("pad-square");
        padContainer.append(div);
    };
};

function changeColor(e) {
    e.target.style.background = 'yellow';
}

function changePad() {
    let userChoice = prompt('How big do you want the sketch pad? (Limit 100)');
    if (userChoice > 100) {
        userChoice = prompt('That size is too big! Must be smaller than or equal to 100!');
        if (userChoice > 100) {
            return;
        }
    }

    const padContainer = document.querySelector('.pad-container');
    while (padContainer.hasChildNodes()) {
        padContainer.removeChild(padContainer.firstChild);
    }
    grid(userChoice);
    let padSquare = document.querySelectorAll('.pad-square');
    padSquare.forEach((padsquare) => {padsquare.addEventListener('mouseover', changeColor)});
}

let gridSize = 16;
grid(gridSize);

const btn = document.querySelector('.grid-change');
btn.addEventListener('click', changePad);

let padSquare = document.querySelectorAll('.pad-square');
padSquare.forEach(padsquare => {padsquare.addEventListener('mouseover', changeColor)});