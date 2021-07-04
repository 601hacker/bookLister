const main = document.querySelector('main');
const addButton = document.querySelector('header button');
const form = document.querySelector('main form');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.cancel');
const submitButton = document.querySelector('.submit');

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

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    let name = nameInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;

    insertObject(name, author, pages);
    form.style.display = 'none';
    body.style.backgroundColor = '';
});
 
function insertObject(name, author, pages) {
    const info = new bookInfoConstructor(name, author, pages);
    insertArray(info);
}

function insertArray(info) {
    bookArray.push(info);
    insertText(bookArray);
}

function insertText(bookArray) {
        let newDiv = document.createElement('div');
        let bookTitle = document.createElement('h3');
        let authorPara = document.createElement('p');
        let pagesPara = document.createElement('p');

        let bookTitleText = document.createTextNode(bookArray[bookArray.length - 1].name);
        let authorParaText = document.createTextNode(`Author: ${bookArray[bookArray.length - 1].author}`);
        let pagesParaText = document.createTextNode(`Pages: ${bookArray[bookArray.length - 1].pages}`);

        bookTitle.appendChild(bookTitleText);
        authorPara.appendChild(authorParaText);
        pagesPara.appendChild(pagesParaText);

        newDiv.appendChild(bookTitle);
        newDiv.appendChild(authorPara);
        newDiv.appendChild(pagesPara);

        main.appendChild(newDiv);
}

