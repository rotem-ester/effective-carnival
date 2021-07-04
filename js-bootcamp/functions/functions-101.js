let greetUser = function (name, day){

    return 'Welcome ' + name + ', today is ' + day
}

console.log(greetUser('Rotem', 'Sunday'))

let swap = function (num1, num2){
    let temp = num1
    num1 = num2
    num2 = temp
    console.log('num2 = ' + num2)
}

let num1 = 1
let num2 = 2

swap(num1, num2)

console.log('num2 = ' + num2)