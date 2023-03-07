const Book = class {
    constructor(book) {
        this.bookNumber  = book[0];
        this.title       = book[1];
        this.image       = 'images/puppy_love/'+book[2];
        this.collection  = book[3];
        this.description = book[4];
        this.breed       = book[5]
    }
    bookTitle() {
        return(
            this.title
        );
    }
    bookListing() {
        const bookCard =
            `<div class="card">
                <img class="card-img-top" src="${this.image}" alt="${this.breed}">
                <div class="card-body">
                    <h4 class="card-title">${this.breed}</h4>
                    <button class="buy" onclick="window.open('https://www.amazon.com/dp/${this.bookNumber}')">
                        Buy Now!
                    </button>
                </div>
             </div>
            `   ;
            return bookCard;
        }
};

//let newBook = new Book(book);
//console.log(newBook.bookTitle());

/*
let result;
for( var i = 0, len = catalog.length; i < len; i++ ) {
    if( catalog[i][5] === 'Australian Shepherd' ) {
        result = catalog[i];
        break;
    }
}
*/