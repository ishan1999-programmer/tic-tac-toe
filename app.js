let content = document.querySelector(".content");
let game_cells = document.querySelectorAll(".game > *");
let game_chance_overlay = document.querySelector(".game_chance_overlay");
let game_winner_overlay = document.querySelector(".game_winner_overlay");
let reset  = document.querySelector("button");

let chance_of = 'X';
let count = 0;

game_cells.forEach((cell)=>{
    cell.addEventListener("click", hanndleClick);
});

function hanndleClick(e){
    if(chance_of=='X'){
        count++;
        e.target.innerText = 'X';
        e.target.style.color = "rgb(0,126,204)";
        e.target.style.pointerEvents = "none";
        if(isWin()){
            win();
            return;
        }
        if(count==9){
            draw();
            return;
        }
        game_chance_overlay.classList.replace("left" , "right");
        game_chance_overlay.innerText = "O";
        content.classList.replace("blue_shadow" , "red_shadow");
        chance_of = 'O';   
    }
    else{
        count++;
        e.target.innerText = 'O';
        e.target.style.color = "rgb(243,46,6)";
        e.target.style.pointerEvents = "none";
        if(isWin()){
            win();
            return;
        }
        if(count==9){
            draw();
            return;
        }
        game_chance_overlay.classList.replace("right" , "left");
        game_chance_overlay.innerText = "X";
        content.classList.replace("red_shadow" , "blue_shadow");
        chance_of = 'X';     
    }
}

function isWin(){
    if(game_cells[0].innerText!="" && game_cells[0].innerText==game_cells[1].innerText && game_cells[1].innerText==game_cells[2].innerText){
        return true;
    }
    else if(game_cells[3].innerText!="" && game_cells[3].innerText==game_cells[4].innerText && game_cells[4].innerText==game_cells[5].innerText){
        return true;
    }
    else if(game_cells[6].innerText!="" && game_cells[6].innerText==game_cells[7].innerText && game_cells[7].innerText==game_cells[8].innerText){
        return true;
    }
    else if(game_cells[0].innerText!="" && game_cells[0].innerText==game_cells[3].innerText && game_cells[3].innerText==game_cells[6].innerText){
        return true;
    }
    else if(game_cells[1].innerText!="" && game_cells[1].innerText==game_cells[4].innerText && game_cells[4].innerText==game_cells[7].innerText){
        return true;
    }
    else if(game_cells[2].innerText!="" && game_cells[2].innerText==game_cells[5].innerText && game_cells[5].innerText==game_cells[8].innerText){
        return true;
    }
    else if(game_cells[0].innerText!="" && game_cells[0].innerText==game_cells[4].innerText && game_cells[4].innerText==game_cells[8].innerText){
        return true;
    }
    else if(game_cells[2].innerText!="" && game_cells[2].innerText==game_cells[4].innerText && game_cells[4].innerText==game_cells[6].innerText){
        return true;
    }
    else{
        return false;
    }
}

function win(){
    game_chance_overlay.classList.add("shrink");
    game_winner_overlay.innerText = `${chance_of} WON`;
    chance_of=='X' ? game_winner_overlay.classList.add("xWon") : game_winner_overlay.classList.add("oWon");
    game_winner_overlay.classList.remove("shrink");
    game_cells.forEach((cell)=>{
        cell.style.pointerEvents = "none";
    })
}

function draw(){
    game_winner_overlay.innerText = "DRAW";
    game_winner_overlay.classList.add("draw");
    game_chance_overlay.classList.add("shrink");
    game_winner_overlay.classList.remove("shrink");
    content.classList.remove("blue_shadow");
    content.classList.remove("red_shadow");
    content.classList.add("green_shadow");
}

reset.addEventListener("click" , resetGame);

function resetGame(){
    chance_of = 'X';
    count = 0;
    game_cells.forEach((cell)=>{
        cell.innerText = "";
        cell.style.pointerEvents = "all";   
    });
    game_chance_overlay.classList.remove("shrink");
    game_chance_overlay.classList.replace("right" , "left");
    game_chance_overlay.innerText = "X";
    game_winner_overlay.classList.add("shrink");
    game_winner_overlay.innerText = "";
    game_winner_overlay.classList.remove("xWon");
    game_winner_overlay.classList.remove("oWon");
    game_winner_overlay.classList.remove("draw");
    content.classList.remove("green_shadow");
    content.classList.remove("red_shadow");
    content.classList.add("blue_shadow");
}


