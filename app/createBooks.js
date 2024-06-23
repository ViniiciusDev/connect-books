const bookShelf = document.querySelector("#livros");

// Creating the books elements and put them in the bookshelf
function showBooksInTheBookShelf(books) {
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
                <p class="livro__preco" id="preco">R$${book.preco.toFixed(2)}</p>
                <div class="tags">
                    <span class="tag">${book.categoria}</span>
                </div>
            </div>
        `;
    });
}
