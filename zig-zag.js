const matrix=[[4,7,1,1,7],[8,9,9,6,1],[6,4,9,5,1],[7,7,4,7,7],[8,6,2,5,5]]
let n=matrix.length
let m=matrix[0].length

let bag=""
for(let i=0;i<=n-1;i++){
    if(i%2==0){
        for(let j=m-1;j>=0;j--){
            bag+=matrix[i][j]+" "
        }
    }
    else{
        for(let j=0;j<=m-1;j++){
            bag+=matrix[i][j]+" "
        }
    }
   
}
console.log(bag)