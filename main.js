// player turn

let playerOneTurn = true;
let playerTwoTurn = false;

function fillPocket(pocket){
    if(playerOneTurn){
        pocket.style.backgroundColor = "#FF6868";
        playerOneTurn = false;
        playerTwoTurn = true;
    }else{
        pocket.style.backgroundColor = "#FFCE69";
        playerTwoTurn = false;
        playerOneTurn = true;
    }
}

// restart game
const pockets = document.querySelectorAll(".game-piece");

function restartGame(){
    const restart = document.querySelector("header button:nth-child(3)");
    restart.addEventListener("click", ()=>{
        pockets.forEach(element => {
            element.style.backgroundColor = "#33383D"; 
        });
    })
}

restartGame();


// store columns
col1 = [];
for(let i = 1; i <= 36; i = i+7){
    const pocket = document.querySelector(`.game-block:nth-child(${i}) .game-piece`);
    col1.push(pocket);
}

col2 = [];
for (let i = 2; i <= 37; i = i+7){
    const pocket = document.querySelector(`.game-block:nth-child(${i}) .game-piece`);
    col2.push(pocket);   
}

col3 = [];
for (let i = 3; i <= 38; i = i+7){
    const pocket = document.querySelector(`.game-block:nth-child(${i}) .game-piece`);
    col3.push(pocket);   
}

col4 = [];
for (let i = 4; i <= 39; i = i+7){
    const pocket = document.querySelector(`.game-block:nth-child(${i}) .game-piece`);
    col4.push(pocket);   
}

col5 = [];
for (let i = 5; i <= 40; i = i+7){
    const pocket = document.querySelector(`.game-block:nth-child(${i}) .game-piece`);
    col5.push(pocket);   
}

col6 = [];
for (let i = 6; i <= 41; i = i+7){
    const pocket = document.querySelector(`.game-block:nth-child(${i}) .game-piece`);
    col6.push(pocket);   
}

col7 = [];
for (let i = 7; i <= 42; i = i+7){
    const pocket = document.querySelector(`.game-block:nth-child(${i}) .game-piece`);
    col7.push(pocket);   
}

console.log(col6);

// click columns
col1.forEach(element => {
    element.addEventListener("click", ()=>{
        for (let i = col1.length-1; i >= 0; i--) {
            if(window.getComputedStyle(col1[i]).backgroundColor === "rgb(51, 56, 61)"){
                fillPocket(col1[i]);
                break;
            }
        }
    })
});

col2.forEach(element => {
    element.addEventListener("click", ()=>{
        for (let i = col2.length-1; i >= 0; i--) {
            if(window.getComputedStyle(col2[i]).backgroundColor === "rgb(51, 56, 61)"){
                fillPocket(col2[i]);
                break;
            }
        }
    })
});

col3.forEach(element => {
    element.addEventListener("click", ()=>{
        for (let i = col3.length-1; i >= 0; i--) {
            if(window.getComputedStyle(col3[i]).backgroundColor === "rgb(51, 56, 61)"){
                fillPocket(col3[i]);
                break;
            }
        }
    })
});

col4.forEach(element => {
    element.addEventListener("click", ()=>{
        for (let i = col4.length-1; i >= 0; i--) {
            if(window.getComputedStyle(col4[i]).backgroundColor === "rgb(51, 56, 61)"){
                fillPocket(col4[i]);
                break;
            }
        }
    })
});

col5.forEach(element => {
    element.addEventListener("click", ()=>{
        for (let i = col5.length-1; i >= 0; i--) {
            if(window.getComputedStyle(col5[i]).backgroundColor === "rgb(51, 56, 61)"){
                fillPocket(col5[i]);
                break;
            }
        }
    })
});

col6.forEach(element => {
    element.addEventListener("click", ()=>{
        for (let i = col6.length-1; i >= 0; i--) {
            if(window.getComputedStyle(col6[i]).backgroundColor === "rgb(51, 56, 61)"){
                fillPocket(col6[i]);
                break;
            }
        }
    })
});

col7.forEach(element => {
    element.addEventListener("click", ()=>{
        for (let i = col7.length-1; i >= 0; i--) {
            if(window.getComputedStyle(col7[i]).backgroundColor === "rgb(51, 56, 61)"){
                fillPocket(col7[i]);
                break;
            }
        }
    })
});




