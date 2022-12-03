const ratings = Array.from(document.getElementsByClassName('checkmark'));
let rating;
const cards = Array.from(document.getElementsByTagName('article'));

const submit = document.querySelector('button');

submit.addEventListener('click', () => {
    if (rating === undefined) {
        return;
    }
    cardToggler()
    addRatingToText()
});

function cardToggler() {
    cards.forEach(element => {
        element.classList.toggle('visually-hidden');
    })
}


ratings.forEach(element => {
    element.addEventListener('click', () => {
        classRemover();
        element.classList.add('checked');
        rating = element.innerText;
    });
});

function classRemover() {
    ratings.forEach(element => {
        element.classList.remove('checked');
    });
}

function addRatingToText() {
    let paragraph = Array.from(document.getElementsByClassName('thanks__rating'));
    let text = document.createTextNode(`You selected ${rating} out of 5`);
    paragraph[0].appendChild(text);
}