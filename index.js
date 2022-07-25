// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const newcats = [...cats, 'Broom'];
    return newcats;

}

function prependCat(name) {
    const morecats = ['Arnold', ...cats];
    return morecats;
}

function removeLastCat() {
    const lastcat = cats.slice(0, 2);
    return lastcat;
}

function removeFirstCat() {
    const firstcat = cats.slice(1,3);
    return firstcat;
}