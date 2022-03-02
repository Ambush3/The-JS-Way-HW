// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

// 101 assigned to i
let i = 101;

// while i is greater than or equal to 100, continue to ask the user to enter a number thats less than or equal to 100
while (i > 100) {
    i = prompt('ask the user for a number until the entered number is less than or equal to 100');
}


// When you are done with the above, improve the program so that the terminating number is between 50 and 100.

// 0 assigned to i
let i = 0;
// while i is less than or equal to 50, or i is greater than or equal to 100, continue to ask the user for a number until
// the number is greater than 50 or less than 100
while (i <= 50 || i >= 100) {
    i = prompt(
        'ask the user for a number until the entered number is greater than 50 or less than 100'
    );
}