// Activity 1: Object Creation and Access ---
// Task 1:-
let Book_info = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    genre: "Programming",
    pages: 176
};
// console.log(Book_info);

// Task 2:-
console.log(`Title of Book is -${Book_info.title}\nAuthor of book -> ${Book_info.author}`);


// Activity 2:- Object Methods ---
// Task 3:- Add a method...
Book_info.getString=function (){
    return `Title of Book is -${this.title}\nAuthor of book -> ${this.author}`;
};
// console.log(Book_info.getString());

// Task 4:
Book_info.Update=function (newY){
    return `curent year ${this.year}\nUpdated year ${this.year=newY}`;
};
console.log(Book_info.Update(1967));


// Activity 3:-
// Task 5:
let library = {
    name: "Community Library",
    books: [
        {   
            Book_no:1,
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925
        },
        {   
            Book_no:2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {   
            Book_no:3,
            title: "1984",
            author: "George Orwell",
            year: 1949
        }
    ],
    
};
console.log(library);

// Task 6:
library.books.forEach(book => {
    console.log(book.title);
});


// Activity 4:-
// Task 7:
Book_info.retu=function (){
    return `Book Titel is-> ${this.title}\nBook published Year-> ${this.year}`
};
console.log(Book_info.retu());


// Activity 5:-
// Task 8:
library.books.forEach(obj=>{
    // console.log(`object key->\n${Object.keys(obj)}\n\nobject value->\n${Object.values(obj)}`);
    console.log(`${Object.keys(obj)}`);
});

// Task 9:
library.books.forEach((books)=>{
    let keys=Object.keys(books);
    let value=Object.values(books);
    for(let i=0,j=0; i<keys.length,j<value.length; i++,j++){
        console.log(`${keys[i]} -> ${value[j]}`);  
    };
    console.log("\n");
});
