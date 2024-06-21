let books = [];
const bookShelf = document.querySelector("#livros");
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

// Creating the books elements and put them in the bookshelf
function showBooksInTheBookShelf(booksList) {
    books.forEach((book) => {
        bookShelf.innerHTML += `
            <div class="livro">
                <img
                    class="livro__imagens"
                    src="${book.imagem}"
                    alt="${book.alt}"
                />
                <h2 class="livro__titulo">
                    ${book.titulo}    
                </h2>
                <p class="livro__descricao">${book.autor}</p>
                <p class="livro__preco" id="preco">R$${book.preco}</p>
                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
            </div>
        `;
    });
}
