const arr1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]
const arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const arr3 = [
    [1, 2, 8],
    [4, 5, 6],
    [9, 8, 7]
]

const diagonalDifference = (squareMatrix) => {
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < squareMatrix.length; i++) {
        sum1 += squareMatrix[i][i];
        sum2 += squareMatrix[i][((squareMatrix.length-1)-i)];
    }
    let diff = sum1-sum2
    return (diff < 0 ? -diff : diff)
}

console.log(diagonalDifference(arr1))
console.log(diagonalDifference(arr2))
console.log(diagonalDifference(arr3))