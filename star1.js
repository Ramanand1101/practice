let n = 5; // Variable n represents the number of rows in the pattern.
let bag = ""; // Initialize an empty string to store the pattern.

// Generating the first half of the pattern with increasing columns.
for (let i = 1; i <= n; i++) { // Outer loop for rows, starts from 1 and goes up to n.
    for (let j = 1; j <= i; j++) { // Inner loop for columns, starts from 1 and goes up to the current row number i.
        bag += j + " "; // Add the current column number followed by a space to the bag.
    }
    bag += "\n"; // Add a newline character after each row is complete.
}

// // Generating the second half of the pattern with decreasing columns.
// for (let i = n - 1; i >= 1; i--) { // Outer loop for rows, starts from n - 1 and goes down to 1.
//     for (let j = 1; j <= i; j++) { // Inner loop for columns, starts from 1 and goes up to the current row number i.
//         bag += j + " "; // Add the current column number followed by a space to the bag.
//     }
//     bag += "\n"; // Add a newline character after each row is complete.
// }

console.log(bag); // Output the final pattern stored in the 'bag' variable to the console.

