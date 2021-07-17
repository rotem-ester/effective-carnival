const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get(){
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
console.log(counter.get())

//Adder
const createAdder = (a) => {
    return(b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(20))

//Tipper

const tipper = (precent) => {
    return (amount) => {
        return amount * precent
    }
}

const tipOf15 = tipper(0.15)
const tipOf12 = tipper(0.12)
const tipOf10 = tipper(0.10)

console.log(tipOf15(100))
console.log(tipOf12(100))
console.log(tipOf10(100))