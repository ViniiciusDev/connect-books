function configDiscount(books) {
    const discount = 0.2;
    console.log(discount)
    booksDiscount = books.map(book => {
        return { ...book, preco: book.preco - (book.preco * discount) };
    });
    console.log(booksDiscount)
    return booksDiscount;
}
