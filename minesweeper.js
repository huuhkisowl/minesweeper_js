
const minesweeper = (square) => {

    const result = []

    if(!square || square.length === 0) {
        return result
    }
    //console.table(square)
    for(let x = 0; x < square.length; x++) {
        result.push([]);
        for(let y = 0; y < square[x].length; y++) {
            if(square[x][y] === '*') {
                result[x][y] = '*';
            }
            else {
                result[x][y] = 0;
                //Above
                if(square[x-1] !== undefined) {
                    if(square[x-1][y] === '*') {
                        result[x][y]++
                    }
                    //Top Left
                    if(square[x-1][y-1] === '*') {
                        result[x][y]++
                    }
                    //Top Right
                    if(square[x-1][y+1] === '*') {
                        result[x][y]++
                    }
                }
                //Below
                if(square[x+1] !== undefined) {
                    if(square[x+1][y] === '*') {
                        result[x][y]++
                    }
                    //Bottom Left
                    if(square[x+1][y-1] === '*') {
                        result[x][y]++
                    }
                    //Bottom Right
                    if(square[x+1][y+1] === '*') {
                        result[x][y]++
                    }
                }
                //left
                if(square[x][y-1] !== undefined) {
                    if(square[x][y-1] === '*') {
                        result[x][y]++
                    }
                }
                //Right
                if(square[x][y+1] !== undefined) {
                    if(square[x][y+1] === '*') {
                        result[x][y]++
                    }
                }
            }
        }
    }

    //console.table(result)
    return result
    
}

module.exports = minesweeper;