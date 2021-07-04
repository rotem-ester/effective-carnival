let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326,

    printTitle: function(){
        console.log(this.title)
    }
}

myBook.printTitle()

let me = {
    myName: 'Rotem',
    age: 33,
    location: 'Jaffa',

    incrementAge: function(){
        this.age++
    },

    toString: function(){
        return `${this.myName} is ${this.age} and lives in ${this.location}.`
    }
}

console.log(me.toString())
me.incrementAge()
console.log(me.toString())