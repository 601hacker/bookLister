const main = document.querySelector('main');
const addButton = document.querySelector('header button');
const form = document.querySelector('main form');
const body = document.querySelector('body');
const cancelButton = document.querySelector('main form [type="button"]');
const submitButton = document.querySelector('main form [type="submit"]');

const nameInput = document.querySelector('#name');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');

class bookInfoConstructor {
    constructor(var1, var2, var3) {
        this.name = var1;
        this.author = var2;
        this.pages = var3;
    }
}
let bookArray = [];

addButton.addEventListener('click', function() {
    form.style.display = 'block';
    body.style.zIndex = '7';
    body.style.backgroundColor = 'rgb(0, 0, 0, 0.9)';
});

cancelButton.addEventListener('click', function() {
    form.style.display = 'none';
    body.style.backgroundColor = '';
});

submitButton.addEventListener('click', function() {
    let name = nameInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;

    insertObject(name, author, pages);
});
 
function insertObject(name, author, pages) {
    const info = new bookInfoConstructor(name, author, pages);
    insertArray(info);
}

function insertArray(info) {
    bookArray.push(info);
    insertText(bookArray);
}

const div = document.querySelector('main div');

function insertText(bookArray) {
    console.log(bookArray[0]);
}


