let parity = () => {
    let numX = parseInt(prompt('Give me a number'))
    for (i = numX; i <= numX + 10; i++) {
        console.log(`${i} is ${i % 2 === 0 ? "even" : "odd"}`);
    }
}
parity()

//

// for loop that asks the user to pick a number between 1 and 10, assigning it to i
// if I is less than or equal to 10, then increment
for (let i = prompt("Pick a number between 1 and 10: "); i <= 10; i++) {
    // if i can be divided by 2 with a remainder of 0 then the number is even
    if (i % 2 === 0) {
        console.log(`${i} is even`);
        // else if the number can be divided by 3 or 1 and have a remainder of 0, number is odd
    } else if (i % 3 === 0 || i % 1 === 0) {
        console.log(`${i} is odd`);
    }
}
