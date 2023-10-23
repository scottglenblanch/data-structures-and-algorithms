const initialListOfNumbers = [2, 0, 5, 6, 9, 2, ,-100, 1, 42, 3, 169, -7];


function renderRows() {

}


function renderInitialListOfNumbers() {
    function getHTML() {
        return initialListOfNumbers.reduce((html, number) => {
            return `${html}<div class="initial-list-number"> ${number}</div>`;
        }, '');
    }

    const el = document.querySelector("#initial-list-of-numbers");

    el.innerHTML = getHTML();

}

function initialRender() {
    renderInitialListOfNumbers();
    renderRows();
}

initialRender()
