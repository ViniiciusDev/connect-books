const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => btn.addEventListener("click", filterCategory));

function filterCategory() {
    const btnElement = document.getElementById(this.id);
    const category = btnElement.value;
    let filterBooks = books.filter(book => book.categoria == category);
    showBooksInTheBookShelf(filterBooks)
}