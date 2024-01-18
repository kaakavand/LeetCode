function rotate(matrix: number[][]): void {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = matrix[j][i]
            }
        }

console.log(matrix)

};
rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
