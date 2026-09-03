class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const rowsMap = new Map();
        const colsMap = new Map();
        const squaresMap = new Map();

        for(let i=0; i < 9; i++){
            console.log(board[i].length)
            for(let j =0; j < 9; j++){
                const theBoard = board[i][j];
                

                if(theBoard === '.'){
                    continue;
                }

                console.log(i,j)

                const squareKey = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;

                if(rowsMap.get(i) && rowsMap.get(i).has(theBoard) || colsMap.get(j) && colsMap.get(j).has(theBoard) || squaresMap.get(squareKey) && squaresMap.get(squareKey).has(theBoard)){
                    return false;
                }


                if(!rowsMap.has(i)){
                    rowsMap.set(i, new Set())
                }

                if(!colsMap.has(j)){
                    colsMap.set(j, new Set())
                }

                if(!squaresMap.has(squareKey)){
                    squaresMap.set(squareKey, new Set())
                }

                rowsMap.get(i).add(theBoard)
                colsMap.get(j).add(theBoard)
                squaresMap.get(squareKey).add(theBoard)
            }
        }

        return true
    }
}
