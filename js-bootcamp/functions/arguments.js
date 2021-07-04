let add = function(num1, num2, num3){
    return num1 + num2 + num3
}

let result = add(1, 2, 3)
console.log(result)

//default arguments
let getScoreText = function(name = 'Anonymous', score = 0){
    return 'Name: ' + name + ', Score: ' + score
}


let scoreText = getScoreText(undefined, 70)
console.log(scoreText)

//Template string
let myName = 'Rotem'
let myAge = 33
console.log(`hey, my name is ${myName}! I am ${myAge * 3} years old.`)