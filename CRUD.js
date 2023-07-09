/* 

Steve Hamilton
Week 12 Assignment
2023-3-30-fe

Welcome to THE LIBRARY. There are many books to catalogue. Here you can enter new books (Create), parouse the catalogue (Read), select favorite books (Update), and Delete entries.

*/


//Variable Declarations:

let currentID = 0;
let currentRow = 0;
let bookToDelete = 0;

const bookList = [
]



function newentry() {

    let title = document.getElementById("new-book-name").value;
    let author = document.getElementById("new-book-author").value;
    let ISBN = document.getElementById("new-book-ISBN").value;


    const newBook = {
        id: currentID++,
        title: title,
        author: author,
        ISBN: ISBN,
        favorite: false
    }
    
    bookList.push(newBook);

    // used for testing early on:

    // console.log(newBook.title);
    // console.log(newBook.author);
    // console.log(newBook.ISBN);
    // console.log(newBook.favorite);
    // console.log(newBook.id);

    // Creating a new row for the new entry:
    let table = document.getElementById('table');
    let row = table.insertRow(1);
    row.insertCell(0).innerHTML = newBook.title;
    row.insertCell(1).innerHTML = newBook.author;
    row.insertCell(2).innerHTML = newBook.ISBN; 

    let buttonCell = row.insertCell(3);

    // A button to update data:
    let favButton = document.createElement("button");
    favButton.innerHTML = "Favorite";
    favButton.classList.add('btn', 'btn-success');
    buttonCell.appendChild(favButton);
    favButton.addEventListener('click', () => {
        console.log('hey');
        if (newBook.favorite){
            row.classList.add('table', 'table-light', 'table-striped', 'table-hover');
            newBook.favorite = false;
        } else { if (!newBook.favorite) {
            row.classList.add('table-success');
            newBook.favorite = true;
            }
        }    
    })

    // A button to delete data:
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add('btn', 'btn-warning', 'ms-1',);
    buttonCell.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        console.log('hey');
        row.remove(1);
    }) 

// Clearing the form:
document.getElementById('new-book-name').value = '';
document.getElementById('new-book-author').value = '';
document.getElementById('new-book-ISBN').value = '';

}











