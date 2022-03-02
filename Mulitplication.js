// Write a program that asks the user for a number, then shows the multiplication table for this number.

// prompt user for a number
// assign number to mult
let number = prompt('Enter a number: ');
let mult = number;
// for loop
// let i be assigned to mult, i is equal to or less than 10, then pre-increment
for (let i = mult; i <= 10; ++i) {
    console.log(`${mult} times ${i} = ${i * mult}`)
}



// When you are done, improve the program so it only accepts numbers between 2 and 9(use the previous exercise as a blueprint).

// number assigned to the prompt chosen number by user
let number = prompt('Enter a number: ');
// if number is greater than 9 or less than 2 
if (number > 9 || number < 2) {
    // console.log you have not chosen wisely
    console.log('You have not chosen wisely')
    // else let i = 1, if i is less than or equal to 10, then pre-increment
    // const result = i multiplied by the number 
    // console.log "number multiplied by i = result"
} else {
    for (let i = 1; i <= 10; ++i) {
        const result = i * number;
        console.log(`${number} * ${i} = ${result}`);
    }
}