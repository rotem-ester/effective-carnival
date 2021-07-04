let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326,
}

let otherBook = {
    title: 'A People History',
    author: 'Howard Zinn',
    pageCount: 723,
}

let getSummary = function(book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
    
}

console.log(getSummary(myBook).summary)
console.log(getSummary(myBook).pageCountSummary)
console.log(getSummary(otherBook).summary)
console.log(getSummary(otherBook).pageCountSummary)


