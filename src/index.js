import {Book} from './Book.js';
import {UI} from './UI.js'

const form = document.querySelector('[data-book-form]')
const titleField = document.querySelector('[data-title]')
const authorField = document.querySelector('[data-author]')
const isbnField = document.querySelector('[data-isbn]')
const tableField = document.getElementById('book-list')

let booksArray = []

export function getBooksArray() {
    return booksArray;
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let fields = [titleField, authorField, isbnField]
    let id = Math.random() * 10000
    const book = new Book(id, titleField.value, authorField.value, isbnField.value)
    booksArray = [...booksArray, book]
    console.log(book);
    console.log(booksArray);
    UI.displayInsertedBook(tableField, book)
    UI.clearInputFields(fields)
    UI.removeBook()
})