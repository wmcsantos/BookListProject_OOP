import { getBooksArray } from './index.js';

const title = document.getElementsByTagName('h1')[0]

// User Interface class
export class UI {
    static displayInsertedBook(table, data) {
        let displayRow = `
                <td>${data.title}</td>
                <td>${data.author}</td>
                <td>${data.isbn}</td>
                <td>
                    <a class="remove-book cursor-pointer" data-id="${data.id}">X</a>
                </td>
                `

        let success = UI.evaluateBookInserted(data)
        if (success) {
            let newRow = table.insertRow(-1)
            newRow.classList.add('leading-10', 'border-b')
            newRow.innerHTML = displayRow
        }
    }
    
    static clearInputFields(data) {
        data.forEach(element => {
            element.value = ''
        });
    }

    static removeBook() {
        const xButton = document.getElementsByClassName('remove-book')
        let xButtonList = [...xButton]
        xButtonList.forEach((button) => {
            button.addEventListener('click', (e) => {
                console.log(button);
                console.log(e.target);
                e.target.parentElement.parentElement.remove()
                let bookId = e.target.dataset.id
                //remove from array
                UI.removeBookFromArray(bookId)
            })
        })
    }

    static removeBookFromArray(id) {
        let booksArray = getBooksArray();
        const updatedArray = booksArray.filter((item) => item.id !== +id);
        // Update the global array with the filtered result
        booksArray.splice(0, getBooksArray().length, ...updatedArray);
        console.log(updatedArray);
        UI.showMessage('Book Removed', 'danger')
    }

    static showMessage(message, alert) {
        let style
        if(alert === 'success') {
            style = 'text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400'
        } else if (alert === 'danger') {
            style = 'text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
        }
        let messageDiv = `<div data-message 
                            class="text-center p-2 mb-4 text-sm ${style}">
                            ${message}
                          </div>`
        title.insertAdjacentHTML('afterend', messageDiv)

        const messageField = document.querySelector('[data-message]')
        
        setTimeout(() => {
            messageField.remove()
        }, 2000);
    }

    static evaluateBookInserted(data) {
        let successFlag
        if(!data.title && !data.author && !data.isbn) {
            UI.showMessage('Fill in all the fields!', 'danger');
            successFlag = false
        } else if (!data.title && data.author && data.isbn) {
            UI.showMessage('Title field is missing!', 'danger');
            successFlag = false
        } else if (data.title && !data.author && data.isbn) {
            UI.showMessage('Author field is missing!', 'danger');
            successFlag = false
        } else if (data.title && data.author && !data.isbn) {
            UI.showMessage('ISBN field is missing!', 'danger');
            successFlag = false
        } else if (!data.title && !data.author && data.isbn) {
            UI.showMessage('Title and Author fields are missing!', 'danger');
            successFlag = false
        } else if (!data.title && data.author && !data.isbn) {
            UI.showMessage('Title and ISBN fields are missing!', 'danger');
            successFlag = false
        } else if (data.title && !data.author && !data.isbn) {
            UI.showMessage('Author and ISBN fields are missing!', 'danger');
            successFlag = false
        } else {
            UI.showMessage('Book Added', 'success')
            successFlag = true
        }
        return successFlag;
    }
}