const orderBtn = document.getElementById("btnOrdenarPorPreco");
orderBtn.addEventListener("click", orderByPrice);

function orderByPrice() {
    let orderPrice = books.sort((a, b) => a.preco - b.preco)
    showBooksInTheBookShelf(orderPrice)
}