const main = document.querySelector('main');
const addButton = document.querySelector('.add');
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
    body.style.backgroundColor = 'rgb(143, 217, 168, 0.5)';
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
    form.style.display = 'none';
    body.style.backgroundColor = '';
    window.location.reload();
});
 
function insertObject(name, author, pages) {
    const info = new bookInfoConstructor(name, author, pages);
    insertArray(info);
}

function insertArray(info) {
    bookArray.push(info);
    if(localStorage.length == 0) {
        localStorage.setItem("bookArray", JSON.stringify(bookArray));
    } else {
        let localStorageBookArray = JSON.parse(localStorage.getItem('bookArray'));
        localStorageBookArray.push(info);
        localStorage.setItem("bookArray", JSON.stringify(localStorageBookArray));
    }
}

function insertText() {
        let localStorageBookArray = JSON.parse(localStorage.getItem('bookArray'));

    for(let i = 0; i < localStorageBookArray.length; i++) {
        let newDiv = document.createElement('div');
        let bookTitle = document.createElement('p');
        let authorPara = document.createElement('p');
        let pagesPara = document.createElement('p');
        let button = document.createElement('button');
        let fontAwesome = document.createElement('i');
        
        button.setAttribute('type', 'button');
        button.className = `${i}`;
        button.id = 'remove';
        fontAwesome.setAttribute('class', 'fas fa-times');

        let bookTitleText = document.createTextNode(localStorageBookArray[i].name);
        let authorParaText = document.createTextNode(`Author: ${localStorageBookArray[i].author}`);
        let pagesParaText = document.createTextNode(`Pages: ${localStorageBookArray[i].pages}`);

        bookTitle.appendChild(bookTitleText);
        authorPara.appendChild(authorParaText);
        pagesPara.appendChild(pagesParaText);
        button.appendChild(fontAwesome);

        bookTitle.appendChild(button);
        newDiv.appendChild(bookTitle);
        newDiv.appendChild(authorPara);
        newDiv.appendChild(pagesPara);

        main.appendChild(newDiv);
    }
    removeButton();
}

function removeButton() {
    let localStorageBookArray = JSON.parse(localStorage.getItem('bookArray'));
    let removeButton = document.querySelectorAll('#remove');
    for(let i = 0; i < removeButton.length; i++) {
        removeButton[i].addEventListener('click', function() {
            if(form.style.display == 'block') {
                removeButton[i].style.backgroundColor = 'rgb(0, 0, 0, 0.0)';
            }

            localStorageBookArray.splice(parseInt(removeButton[i].className, 10), 1);
            localStorage.setItem("bookArray", JSON.stringify(localStorageBookArray));
            window.location.reload();
        });
    }
}

insertText();

console.log(localStorage);