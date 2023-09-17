import {Book} from './Book.js';
import {UI} from './UI.js'

const form = document.querySelector('[data-book-form]')
const titleField = document.querySelector('[data-title]')
const authorField = document.querySelector('[data-author]')
const isbnField = document.querySelector('[data-isbn]')
const tableField = document.getElementById('book-list')

let booksArray = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let fields = [titleField, authorField, isbnField]
    const book = new Book(titleField.value, authorField.value, isbnField.value)
    booksArray = [...booksArray, book]
    console.log(book);
    UI.displayInsertedBook(tableField, book)
    UI.clearInputFields(fields)
})