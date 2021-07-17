//HTTP hypertext transfer protocol
//request - what do we want to do
//response - what was actually done

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
}

const startGame = async () => {
    const puzzle = await getPuzzle()
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()


// Making an HTTP request

// getPuzzle().then((puzzle) => {
//     console.log(puzzle)
// }).catch((err) => {
//     console.log(err)
// })

// getCurrentCountry().then((country) => {
//     console.log('You are currently in', country.name)
// }).catch((error) => {
//     console.log(error)
// })

// getLocation().then((location) => {
//     console.log(`You are currently in ${location.city}, ${location.region},`)
//     return getCountry(location.country)
// }).then((country) => {
//      console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })

