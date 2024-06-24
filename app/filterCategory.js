const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => btn.addEventListener("click", filterCategory));

function filterCategory() {
    const btnElement = document.getElementById(this.id);
    const category = btnElement.value;
    let filterBooks = category == "disponivel" ? filterByOnStock() : filterByCategory(category);
    showBooksInTheBookShelf(filterBooks)
    if (category == "disponivel") {
        const totalPrice = calcTotalPrice(filterBooks)
        allBooksOnStockTotal(totalPrice);
    }
}

function filterByCategory(category) {
    return books.filter(book => book.categoria == category);
}

function filterByOnStock() {
    return books.filter(book => book.quantidade > 0);
}

function allBooksOnStockTotal(totalPrice) {
    allBooksOnStock.innerHTML = `
            <div class="livros__disponiveis">
                <p>
                    Todos os livros disponíveis por R$
                    <span id="valor">${totalPrice}</span>
                </p>
            </div> 
    `
}