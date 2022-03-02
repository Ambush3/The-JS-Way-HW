// Accepts only numbers between 1-100
// If number can be divided by 3 = Fizz
// If number can be divided by 5 and not by 3 = Buzz

let number = prompt("Choose a starting number: ")

if (number % 3 === 0) {
    console.log('Fizz')
} else if (number % 5 === 0) {
    console.log('Buzz')
}

// Looping 1 through 100
for (i = 1; i <= 100; i++) {
    // if number is divisible by 3 and 5
    if ((i % 3 === 0) && i % 5 === 0) {
        console.log("FIZZBUZZ")
    }
    // else if number is divided by 3 
    else if (i % 3 === 0) {
        console.log('FIZZ')
    }
    // else if number is divided by 5 
    else if (i % 5 === 0) {
        console.log("BUZZ")
    } else {
        console.log(i)
    }
}