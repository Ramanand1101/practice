const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20]
];
let n=matrix.length;
let m=matrix[0].length;

let top=0
let bottom=n-1
let left=0
let right=m-1
let count=0
let bag=""
while(count<n*m){
    //top element
    for(let i=left;i<=right;i++){
        bag+=matrix[top][i]+" "
        count++
    }
    top++
    //right element
   
    for (let i = top; i <= bottom; i++) {
        bag += matrix[i][right] + " ";
        count++;
    }
    right--;
    //bottom element
    for(let i=right;i>=left;i--){
        bag+=matrix[bottom][i]+" "
        count++
    }
    bottom--
    //left element
    for(let i=bottom;i>=top;i--){
        bag+=matrix[i][left]+" "
        count++
    }
    left++
}
console.log(bag)



















// let N = matrix.length; // Number of rows
// let M = matrix[0].length; // Number of columns

// let top = 0;
// let bottom = N - 1;
// let left = 0;
// let right = M - 1;
// let count = 0;
// let bag = "";

// while (count < N * M) {
//     for (let i = left; i <= right; i++) {
//         bag += matrix[top][i] + " ";
//         count++;
//     }
//     top++;

//     for (let i = top; i <= bottom; i++) {
//         bag += matrix[i][right] + " ";
//         count++;
//     }
//     right--;

//   
//         for (let i = right; i >= left; i--) {
//             bag += matrix[bottom][i] + " ";
//             count++;
//         }
//         bottom--;
//

//   
//         for (let i = bottom; i >= top; i--) {
//             bag += matrix[i][left] + " ";
//             count++;
//         }
//         left++;
// 
// }

//console.log(bag);
