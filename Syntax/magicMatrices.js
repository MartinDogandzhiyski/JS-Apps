function magicM(matrix) {
    isMagic = true
    for (let i = 0; i<matrix.length; i++) {
        let rowSum = matrix[i].reduce((partialSum, a) => partialSum + a, 0);
        let colSum = 0;
        for (let n = 0; n < matrix[i].length; n++){
            colSum += matrix[n][i];
        }
        if (rowSum !== colSum){
            console.log('false');
            isMagic = false
            break;
        } 
        
    }
    if (isMagic === true){
        console.log('true');
    }
}

magicM(
    [[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
)
console.log('aaaaaaa');

magicM(
    [[11, 32, 45], [21, 0, 1], [21, 1, 1]]
)


magicM(
    [[1, 0, 0], [0, 0, 1], [0, 1, 0]]
)