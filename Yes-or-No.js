// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.

let answer = prompt('What is your answer?').toLowerCase()

while (answer != 'yes' && answer != 'no') {
    answer = prompt('What is your answer?').toLowerCase()
} if (answer === 'yes' || answer === 'no') {
    answer = alert('Game Over!')
} 