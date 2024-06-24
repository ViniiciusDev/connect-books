const bookShelf = document.querySelector("#livros");
const allBooksOnStock = document.getElementById("valor_total_livros_disponiveis");
// Creating the books elements and put them in the bookshelf
function showBooksInTheBookShelf(books) {
    allBooksOnStock.innerHTML = '';
    bookShelf.innerHTML = '';
    books.forEach((book) => {
        let outOfStock = book.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel";
        bookShelf.innerHTML += `
            <div class="livro">
                <img
                    class="${outOfStock}"
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
