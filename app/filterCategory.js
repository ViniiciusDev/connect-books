const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => btn.addEventListener("click", filterCategory));

function filterCategory() {
    const btnElement = document.getElementById(this.id);
    const category = btnElement.value;
    let filterBooks = category == "disponivel" ? books.filter(book => book.quantidade > 0) : books.filter(book => book.categoria == category);
    showBooksInTheBookShelf(filterBooks)
}