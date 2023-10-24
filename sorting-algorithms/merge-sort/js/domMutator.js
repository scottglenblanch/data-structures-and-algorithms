import { numbersList } from "./state";
// render list of numbers

export function renderListOfNumbers() {
    const element = document.querySelector('#initial-list-of-numbers');
    const html = numbersList.reduce((accum, number) => {
        return `${accum}<div>${number}</div>`
    }, '');

    element.innerHTML = html;
}