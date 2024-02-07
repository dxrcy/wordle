function init() {
    reset_grid();
}

const WIDTH = 5;
const HEIGHT = 6;

function reset_grid() {
    let rows = "";

    for (let y = 0; y < HEIGHT; y++) {
        let cells = "";

        for (let x = 0; x < WIDTH; x++) {
            let letters = "ABCDEFGHI  ";
            let index = Math.floor(Math.random() * letters.length);
            let letter = letters[index]

            let colors = ["empty", "gray", "yellow", "green"];
            let index2 = Math.floor(Math.random() * colors.length);
            let color = colors[index2];

            cells += `
                <div class="cell ${color}">
                    ${letter}
                </div>
            `;
        }

        rows += `
            <div class="row">
                ${cells}
            </div>
        `;
    }

    document.querySelector("#grid").innerHTML = `
        ${rows}
    `;
}
