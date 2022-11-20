const minesweeper = require("./minesweeper");

describe("Minesweeper test cases",  () => {

    const squareTest = [['*','.','.','.'],['.','.','.','.'],['.','*','.','.'],['.','.','.','.']]
    test(`1. Bomb positions in square:\n${squareTest.join("\n")}\nShould be [['*',1,0,0],[2,2,1,0],[1,'*',1,0],[1,1,1,0]]`, () => {
        expect(minesweeper(squareTest)).toEqual([['*',1,0,0],[2,2,1,0],[1,'*',1,0],[1,1,1,0]]);
    })

    const squareTest2 = [['*','*','.','.','.'],['.','.','.','.','.'],['.','*','.','.','.']]
    test(`2. Bomb positions in square:\n${squareTest2.join("\n")}\nShould be [['*','*',1,0,0],[3,3,2,0,0],[1,'*',1,0,0]]`, () => {
        expect(minesweeper(squareTest2)).toEqual([['*','*',1,0,0],[3,3,2,0,0],[1,'*',1,0,0]]);
    })

    const squareTest3 = [['*','*','.','.','*']]
    test(`3. Bomb positions in square:\n${squareTest3.join("\n")}\nShould be [['*','*',1,1,'*']]`, () => {
        expect(minesweeper(squareTest3)).toEqual([['*','*',1,1,'*']]);
    })

    test(`4. Square is empty, should be []`, () => {
        expect(minesweeper(null)).toEqual([]);
    })

})