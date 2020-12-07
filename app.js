// DOM element selectors
const messageEl = document.querySelector('#message')
const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const guessedEl = document.querySelector('#guessed')

// select random word from words array
const randomWord = words[Math.floor(Math.random()*words.length)]
const guessAmount = randomWord.length

// create new hangman game
const game1 = new Hangman (randomWord, 7)

// initialize text content for DOM elements
puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage
guessedEl.textContent = `Guessed Letters: ${game1.guessedLetters.join('')}`

// listen for guess keypress and render DOM element text content
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleEl.textContent = game1.puzzle
    guessesEl.textContent = game1.statusMessage
    guessedEl.textContent = `Guessed Letters: ${game1.guessedLetters.join('')}`
})