//undefined for variables

let name1 = 'jen'

if (name1 === undefined){
    console.log('please provide a name')
} else {
    console.log(name1)
}

//undefined for function arguments
let square = function (num){
    console.log(num)
}

square()
square(3)

//using null to clear a variable

let var1 = 1
console.log(var1)
var1 = null
console.log(var1)