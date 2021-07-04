let temp = 39

let isFreezing = temp <= 32

if (isFreezing) {
    console.log('it is freezing outside')
}

if (!isFreezing){
    console.log('it is not freezing outside')
}


let age = 33
let isChild = age <= 7
let isSenior = age >= 65

if (isChild){
    console.log('you deserve a child discount')
} else if (isSenior){
    console.log('you deserve a senior discount')
} else {
    console.log('you do not deserve a discount')
}

console.log(isChild)
console.log(isSenior)