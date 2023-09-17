
// User Interface class
export class UI {
    static displayInsertedBook(table, data) {

        let newRow = table.insertRow(-1)
        newRow.classList.add('leading-10', 'border-b')
        let bookCell = newRow.insertCell(0)
        let authorCell = newRow.insertCell(1)
        let isbnCell = newRow.insertCell(2)
        bookCell.innerHTML = data.title
        authorCell.innerHTML = data.author
        isbnCell.innerHTML = data.isbn
    }

    static clearInputFields(data) {
        data.forEach(element => {
            element.value = ''
        });
        
    }
}