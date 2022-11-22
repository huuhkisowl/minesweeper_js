
const minesweeper = (square) => {

    const result = []

    if(!square || square.length === 0) {
        return result
    }
    //console.table(square)
    square.map((x, xIndex) => {
        result.push([]);
        x.map((y, yIndex) => {
            if(y === '*') {
                result[xIndex][yIndex] = '*';
            }
            else {
                result[xIndex][yIndex] = 0;
                //Above
                if(square[xIndex-1] !== undefined) {
                    if(square[xIndex-1][yIndex] === '*') {
                        result[xIndex][yIndex]++
                    }
                    //Top Left
                    if(square[xIndex-1][yIndex-1] === '*') {
                        result[xIndex][yIndex]++
                    }
                    //Top Right
                    if(square[xIndex-1][yIndex+1] === '*') {
                        result[xIndex][yIndex]++
                    }
                }
                //Below
                if(square[xIndex+1] !== undefined) {
                    if(square[xIndex+1][yIndex] === '*') {
                        result[xIndex][yIndex]++
                    }
                    //Bottom Left
                    if(square[xIndex+1][yIndex-1] === '*') {
                        result[xIndex][yIndex]++
                    }
                    //Bottom Right
                    if(square[xIndex+1][yIndex+1] === '*') {
                        result[xIndex][yIndex]++
                    }
                }
                //left
                if(x[yIndex-1] === '*')  {
                    result[xIndex][yIndex]++
                }
                //Right
                if(x[yIndex+1] === '*') {
                    result[xIndex][yIndex]++
                }
            }
        })
    });

    //console.table(result)
    return result
    
}

module.exports = minesweeper;