let name1 = '   Rotem Cohen  '

// Length property
console.log(name1.length)

// Convert to upper case
console.log(name1.toUpperCase())

//Convert to lower case
console.log(name1.toLowerCase())

// Includes method
let password = 'abc123password098'
console.log(password.includes('password'))
console.log(password.includes('krkrj'))

// Trim - returns a new string without whitespaces in both ends
console.log(name1.trim())

let isValidPassword = function(password){
    return (password.length > 8 && !password.includes('password'))
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!#$$%$%$#'))
console.log(isValidPassword('123password'))