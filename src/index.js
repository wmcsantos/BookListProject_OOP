import {Book} from './Book.js';

const form = document.querySelector('[data-book-form]')
const titleField = document.querySelector('[data-title]')
const authorField = document.querySelector('[data-author]')
const isbnField = document.querySelector('[data-isbn]')

let booksArray = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const book = new Book(titleField.value, authorField.value, isbnField.value)
    booksArray = [...booksArray, book]
    console.log(booksArray);
    console.log('Submitted!');
})