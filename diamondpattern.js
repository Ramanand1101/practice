let rows = 5;
let pattern = "";


//its-upper half of the diamond
for(let i=0;i<=rows;i++){
    //inner loop for adding space 
    for(let space=1;space<=rows-i;space++){
        pattern+=" "
    }
    for(let j=1;j<=2*i-1;j++){
        pattern+=j
    }
    pattern+="\n"
}
//for lower half of the pattern
for(let i=rows-1;i>=1;i--){
    for(let space=1;space<=rows-i;space++){
        pattern+=" "
    }
    for(let j=1;j<=2*i-1;j++){
        pattern+=j
    }
    pattern+="\n"
}
console.log(pattern)





// // Upper half of the diamond
// for (let i = 1; i <= rows; i++) {
//     // Inner Loop - I -> for the spaces
//     for (let space = 1; space <= rows - i; space++) {
//         pattern += " ";
//     }

//     // Inner Loop - II -> for the numbers
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         pattern += j;
//     }

//     pattern += "\n";
// }

// // Lower half of the diamond
// for (let i = rows - 1; i >= 1; i--) {
//     // Inner Loop - I -> for the spaces
//     for (let space = 1; space <= rows - i; space++) {
//         pattern += " ";
//     }

//     // Inner Loop - II -> for the numbers
//     for (let j = 1; j <= 2 * i - 1; j++) {
//         pattern += j;
//     }

//     pattern += "\n";
// }

// console.log(pattern);
