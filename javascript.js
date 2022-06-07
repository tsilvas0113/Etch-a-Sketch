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

let gridSize = 16;
grid(gridSize);