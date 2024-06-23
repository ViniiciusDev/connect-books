let books = [];
const endPointBooksAPI =
    "https://guilhermeonrails.github.io/casadocodigo/livros.json";

// Function responsable to get the infos from de fetch and save in the array books.
async function getBooksFromAPI() {
    let response = await fetch(endPointBooksAPI);
    books = await response.json();
    console.table(books);
    showBooksInTheBookShelf(books);
}

getBooksFromAPI();
