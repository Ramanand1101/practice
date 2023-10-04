const matrix=[[1,2,3,4,78],[5,6,7,8,79],[9,10,11,12,80],[13,14,15,16,81]]
let n=matrix.length
let m=matrix[0].length

for(let i=0;i<=n-1;i++){
    let bag=""
    for(let j=0;j<=m-1;j++){
        bag+=(matrix[i][j]+1)+" "
    }
    console.log(bag)
}