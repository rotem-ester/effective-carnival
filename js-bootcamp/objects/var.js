//var is function scoped
//let is block scoped



if (true){
    var firstName = 'Jane'
}

console.log(firstName)

//the declaration (declaration, not initiation) of a var variable is implicitly moved to the top of the scope
//so this statement will give undefined

console.log(lastName)
var lastName = 'Cohen'

//while this statement will give error
console.log(anotherName)
let anotherName = 'name'

