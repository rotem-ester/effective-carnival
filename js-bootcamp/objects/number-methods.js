let num = 103.941

//customize amount of decimal places
console.log(num.toFixed(5))
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 100
let max = 150
let randomNum = Math.floor((Math.random() * (max - min + 1))) + min

console.log(randomNum)

//Challange area

let makeGuess = function(min, max, num){
    let randomNum = Math.floor((Math.random() * (max - min + 1))) + min
    return randomNum === num
}

console.log(makeGuess(1, 5, 3))