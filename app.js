let content = document.querySelector(".content");
let game_cells = document.querySelectorAll(".game > *");
let game_chance_overlay = document.querySelector(".game_chance_overlay");
let game_winner_overlay = document.querySelector(".game_winner_overlay");
let reset  = document.querySelector("#reset_button");
let color_of_x = document.querySelector("#color_of_x");
let color_of_o = document.querySelector("#color_of_o");
let x = document.querySelector("#x");
let o = document.querySelector("#o");
let start_button = document.querySelector("#start_button");
let game_color_picker_overlay = document.querySelector(".game_color_picker_overlay");
let xColor = "#0095cc";
let oColor = "#f32e06";

start_button.addEventListener("click" , (e)=>{
    game_color_picker_overlay.style.transform = "translate(-500%,-50%)";
    content.style.filter = "blur(0px)";
})

color_of_x.addEventListener("change" , (e)=>{
    xColor = e.target.value;
    x.style.color = `${e.target.value}`;
    content.style.boxShadow = `0px 0px 15px ${xColor}`;
    game_chance_overlay.style.backgroundColor = `${xColor}`;
    game_chance_overlay.style.boxShadow = `0px 0px 5px ${xColor}`;
});

color_of_o.addEventListener("change" , (e)=>{
    oColor = e.target.value;
    o.style.color = `${e.target.value}`;
});

let chance_of = 'X';
let count = 0;

game_cells.forEach((cell)=>{
    cell.addEventListener("click", hanndleClick);
});

function hanndleClick(e){
    if(chance_of=='X'){
        count++;
        e.target.innerText = 'X';
        e.target.style.color = `${xColor}`;
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
        game_chance_overlay.style.backgroundColor = `${oColor}`;
        game_chance_overlay.style.boxShadow = `0px 0px 5px ${oColor}`;
        game_chance_overlay.innerText = "O";
        content.style.boxShadow = `0px 0px 15px ${oColor}`;
        chance_of = 'O';   
    }
    else{
        count++;
        e.target.innerText = 'O';
        e.target.style.color = `${oColor}`;
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
        game_chance_overlay.style.backgroundColor = `${xColor}`;
        game_chance_overlay.style.boxShadow = `0px 0px 5px ${xColor}`;
        game_chance_overlay.innerText = "X";
        content.style.boxShadow = `0px 0px 15px ${xColor}`;
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
    game_winner_overlay.style.backgroundColor = chance_of=='X' ? `${xColor}` : `${oColor}`;
    game_winner_overlay.classList.remove("shrink");
    game_cells.forEach((cell)=>{
        cell.style.pointerEvents = "none";
    })
}

function draw(){
    game_winner_overlay.innerText = "DRAW";
    game_winner_overlay.style.backgroundColor = "#16cd50";
    game_chance_overlay.classList.add("shrink");
    game_winner_overlay.classList.remove("shrink");
    content.style.boxShadow = `0px 0px 15px #16cd50`;
}

reset.addEventListener("click" , resetGame);

function resetGame(e){
    chance_of = 'X';
    count = 0;
    game_cells.forEach((cell)=>{
        cell.innerText = "";
        cell.style.pointerEvents = "all";   
    });
    game_chance_overlay.classList.remove("shrink");
    game_chance_overlay.classList.replace("right" , "left");
    game_chance_overlay.style.backgroundColor = `#0095cc`;
    game_chance_overlay.style.boxShadow = `0px 0px 5px #0095cc`;
    game_chance_overlay.innerText = "X";
    game_winner_overlay.classList.add("shrink");
    game_winner_overlay.innerText = "";
    content.style.boxShadow = `0px 0px 15px #0095cc`;
    game_color_picker_overlay.style.transform = "translate(-50%,-50%)";
    content.style.filter = "blur(15px)";
    x.style.color = "#0095cc";
    o.style.color = "#f32e06";
    color_of_x.value = "#0095cc";
    color_of_o.value = "#f32e06";
    xColor = "#0095cc";
    oColor = "#f32e06";
}


