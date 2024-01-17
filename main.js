// party animation
function letsCelebrate(color){
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti({
        confettiColors:[color]
    });
}

// player turn

let playerOneTurn = true;
let playerTwoTurn = false;

// for player one
const redFill = document.querySelector(".red-fill");
const yelloFill = document.querySelector(".yellow-fill");
redFill.style.visibility = "visible";

// fill pockets
function fillPocket(pocket){
    if(playerOneTurn){
        pocket.style.backgroundColor = "#FF6868";
        playerOneTurn = false;
        playerTwoTurn = true;
        redFill.style.visibility = "hidden";
        yelloFill.style.visibility = "visible";
    }else{
        pocket.style.backgroundColor = "#FFCE69";
        playerTwoTurn = false;
        playerOneTurn = true;
        yelloFill.style.visibility = "hidden";
        redFill.style.visibility = "visible";
    }
}

// restart game
const pockets = document.querySelectorAll(".game-piece");

function restartGame(){
    const restart = document.querySelector("header button:nth-child(3)");
    restart.addEventListener("click", ()=>{
        pockets.forEach(element => {
            element.style.backgroundColor = "#33383D"; 

            // set player one-true and player two-false on reset
            playerOneTurn = true;
            playerTwoTurn = false;
            redFill.style.visibility = "visible";
            yelloFill.style.visibility = "hidden";
        });
    })
}

restartGame();

// store columns modified
const grid = [[1 ,2 ,3 ,4 ,5 ,6 ,7],
              [8 ,9 ,10,11,12,13,14],
              [15,16,17,18,19,20,21],
              [22,23,24,25,26,27,28],
              [29,30,31,32,33,34,35],
              [36,37,38,39,40,41,42]];

const col1 = [], col2 =[], col3 =[], col4 = [], col5 = [], col6 = [], col7 = [];
const col = [col1, col2, col3, col4, col5, col6, col7];

for(let i = 0; i < 7; i++){
    for(let j = 0; j < 6; j = j + 1){
        if(col1.length < 6){
            const pocket = document.querySelector(`.game-block:nth-child(${grid[j][0]}) .game-piece`);
            col1.push(pocket);
        }else if(col2.length < 6){
            const pocket = document.querySelector(`.game-block:nth-child(${grid[j][1]}) .game-piece`);
            col2.push(pocket);
        }else if(col3.length < 6){
            const pocket = document.querySelector(`.game-block:nth-child(${grid[j][2]}) .game-piece`);
            col3.push(pocket);
        }else if(col4.length < 6){
            const pocket = document.querySelector(`.game-block:nth-child(${grid[j][3]}) .game-piece`);
            col4.push(pocket);
        }else if(col5.length < 6){
            const pocket = document.querySelector(`.game-block:nth-child(${grid[j][4]}) .game-piece`);
            col5.push(pocket);
        }else if(col6.length < 6){
            const pocket = document.querySelector(`.game-block:nth-child(${grid[j][5]}) .game-piece`);
            col6.push(pocket);
        }else{
            const pocket = document.querySelector(`.game-block:nth-child(${grid[j][6]}) .game-piece`);
            col7.push(pocket);
        }
    }
}

// store rows modified
const row1 = [], row2 =[], row3 =[], row4 = [], row5 = [], row6 = [];
const row = [row1, row2, row3, row4, row5, row6];

for(let i = 0; i < 6; i++){
    for(let j = 0; j < 7; j = j + 1){
        if(row1.length < 7){
            const pocket = document.querySelector(`.game-block:nth-child(${grid[0][j]}) .game-piece`);
            row1.push(pocket);
        }else if(row2.length < 7){
            const pocket = document.querySelector(`.game-block:nth-child(${grid[1][j]}) .game-piece`);
            row2.push(pocket);
        }else if(row3.length < 7){
            const pocket = document.querySelector(`.game-block:nth-child(${grid[2][j]}) .game-piece`);
            row3.push(pocket);
        }else if(row4.length < 7){
            const pocket = document.querySelector(`.game-block:nth-child(${grid[3][j]}) .game-piece`);
            row4.push(pocket);
        }else if(row5.length < 7){
            const pocket = document.querySelector(`.game-block:nth-child(${grid[4][j]}) .game-piece`);
            row5.push(pocket);
        }else{
            const pocket = document.querySelector(`.game-block:nth-child(${grid[5][j]}) .game-piece`);
            row6.push(pocket);
        }
    }
}


// click columns modified

col.forEach(column => {
    column.forEach(element => {
        element.addEventListener("click", ()=>{
            for (let i = column.length-1; i >= 0; i--) {
                if(window.getComputedStyle(column[i]).backgroundColor === "rgb(51, 56, 61)"){
                    fillPocket(column[i]);
                    checkWin();
                    break;
                }
            }
        })
    });
});

function checkWin() {
    // check win for all columns
    col.forEach(column => {
        for (let i = column.length-1; i >= 0; i--) {
            if(window.getComputedStyle(column[i]).backgroundColor === "rgb(255, 104, 104)"&&
                window.getComputedStyle(column[i-1]).backgroundColor === "rgb(255, 104, 104)" &&
                window.getComputedStyle(column[i-2]).backgroundColor === "rgb(255, 104, 104)" &&
                window.getComputedStyle(column[i-3]).backgroundColor === "rgb(255, 104, 104)" && (i-1 < col1.length)){

                letsCelebrate("rgb(255, 104, 104)");

            }else if(window.getComputedStyle(column[i]).backgroundColor === "rgb(255, 206, 105)"&&
            window.getComputedStyle(column[i-1]).backgroundColor === "rgb(255, 206, 105)" &&
            window.getComputedStyle(column[i-2]).backgroundColor === "rgb(255, 206, 105)" &&
            window.getComputedStyle(column[i-3]).backgroundColor === "rgb(255, 206, 105)" && (i-1 < col1.length)){
                
                letsCelebrate("rgb(255, 206, 105)");

            }      
        }
    });

    // check win for all rows
    row.forEach(horizontal => {
        for (let i = horizontal.length-1; i >= 0; i--) {
            if(window.getComputedStyle(horizontal[i]).backgroundColor === "rgb(255, 104, 104)" &&
               window.getComputedStyle(horizontal[i-1]).backgroundColor === "rgb(255, 104, 104)" &&
               window.getComputedStyle(horizontal[i-2]).backgroundColor === "rgb(255, 104, 104)" &&
               window.getComputedStyle(horizontal[i-3]).backgroundColor === "rgb(255, 104, 104)" && ((i-1) < row1.length)
               ){

                letsCelebrate("rgb(255, 104, 104)");

            }else if(window.getComputedStyle(horizontal[i]).backgroundColor === "rgb(255, 206, 105)" &&
            window.getComputedStyle(horizontal[i-1]).backgroundColor === "rgb(255, 206, 105)" &&
            window.getComputedStyle(horizontal[i-2]).backgroundColor === "rgb(255, 206, 105)" &&
            window.getComputedStyle(horizontal[i-3]).backgroundColor === "rgb(255, 206, 105)" && ((i-1) < row1.length)){

                letsCelebrate("rgb(255, 206, 105)");

            }
        }
    })

    // for diagonals
    
}


// check win for first column
// function checkWin(){
//     console.log("hellos");
//     for (let i = col1.length-1; i >= 0; i--) {
//         if(window.getComputedStyle(col1[i]).backgroundColor === "rgb(255, 104, 104)"&&
//         window.getComputedStyle(col1[i-1]).backgroundColor === "rgb(255, 104, 104)" &&
//         window.getComputedStyle(col1[i-2]).backgroundColor === "rgb(255, 104, 104)" &&
//         window.getComputedStyle(col1[i-3]).backgroundColor === "rgb(255, 104, 104)" && (i-1 < col1.length)){
//             alert("player one won");
//         }       
//     }
// }

// store columns
// col1 = [];
// for(let i = 1; i <= 36; i = i+7){
//     const pocket = document.querySelector(`.game-block:nth-child(${i}) .game-piece`);
//     col1.push(pocket);
// }

// col2 = [];
// for (let i = 2; i <= 37; i = i+7){
//     const pocket = document.querySelector(`.game-block:nth-child(${i}) .game-piece`);
//     col2.push(pocket);   
// }

// col3 = [];
// for (let i = 3; i <= 38; i = i+7){
//     const pocket = document.querySelector(`.game-block:nth-child(${i}) .game-piece`);
//     col3.push(pocket);   
// }

// col4 = [];
// for (let i = 4; i <= 39; i = i+7){
//     const pocket = document.querySelector(`.game-block:nth-child(${i}) .game-piece`);
//     col4.push(pocket);   
// }

// col5 = [];
// for (let i = 5; i <= 40; i = i+7){
//     const pocket = document.querySelector(`.game-block:nth-child(${i}) .game-piece`);
//     col5.push(pocket);   
// }

// col6 = [];
// for (let i = 6; i <= 41; i = i+7){
//     const pocket = document.querySelector(`.game-block:nth-child(${i}) .game-piece`);
//     col6.push(pocket);   
// }

// col7 = [];
// for (let i = 7; i <= 42; i = i+7){
//     const pocket = document.querySelector(`.game-block:nth-child(${i}) .game-piece`);
//     col7.push(pocket);   
// }


// click columns
// col1.forEach(element => {
//     element.addEventListener("click", ()=>{
//         for (let i = col1.length-1; i >= 0; i--) {
//             if(window.getComputedStyle(col1[i]).backgroundColor === "rgb(51, 56, 61)"){
//                 fillPocket(col1[i]);
//                 break;
//             }
//         }
//     })
// });

// col2.forEach(element => {
//     element.addEventListener("click", ()=>{
//         for (let i = col2.length-1; i >= 0; i--) {
//             if(window.getComputedStyle(col2[i]).backgroundColor === "rgb(51, 56, 61)"){
//                 fillPocket(col2[i]);
//                 break;
//             }
//         }
//     })
// });

// col3.forEach(element => {
//     element.addEventListener("click", ()=>{
//         for (let i = col3.length-1; i >= 0; i--) {
//             if(window.getComputedStyle(col3[i]).backgroundColor === "rgb(51, 56, 61)"){
//                 fillPocket(col3[i]);
//                 break;
//             }
//         }
//     })
// });

// col4.forEach(element => {
//     element.addEventListener("click", ()=>{
//         for (let i = col4.length-1; i >= 0; i--) {
//             if(window.getComputedStyle(col4[i]).backgroundColor === "rgb(51, 56, 61)"){
//                 fillPocket(col4[i]);
//                 break;
//             }
//         }
//     })
// });

// col5.forEach(element => {
//     element.addEventListener("click", ()=>{
//         for (let i = col5.length-1; i >= 0; i--) {
//             if(window.getComputedStyle(col5[i]).backgroundColor === "rgb(51, 56, 61)"){
//                 fillPocket(col5[i]);
//                 break;
//             }
//         }
//     })
// });

// col6.forEach(element => {
//     element.addEventListener("click", ()=>{
//         for (let i = col6.length-1; i >= 0; i--) {
//             if(window.getComputedStyle(col6[i]).backgroundColor === "rgb(51, 56, 61)"){
//                 fillPocket(col6[i]);
//                 break;
//             }
//         }
//     })
// });

// col7.forEach(element => {
//     element.addEventListener("click", ()=>{
//         for (let i = col7.length-1; i >= 0; i--) {
//             if(window.getComputedStyle(col7[i]).backgroundColor === "rgb(51, 56, 61)"){
//                 fillPocket(col7[i]);
//                 break;
//             }
//         }
//     })
// });






