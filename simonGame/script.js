let gameSeq = [];
let userseq = [];
let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let highest = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
     btn.classList.remove("flash");
    },250);
}
function levelUp(){
    userseq = [];
     level++; 
     highest++;
     h2.innerText =`level ${level}`;

     let ranIdx = Math.floor(Math.random()*3);
     let ranCol = btns[ranIdx];
     let ranBtn = document.querySelector(`.${ranCol}`);
     gameSeq.push(ranCol);
     console.log(gameSeq);
     
     btnFlash(ranBtn);
}

function checkAns(idx){

    if(userseq[idx] === gameSeq[idx]){
         if(userseq.length == gameSeq.length){
            setTimeout(levelUp,1000)
         }
    }else{
        h2.innerHTML =`Game Over! your score was <b>${level}</b> <br> Press any key to restart game.`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250)
        
        reset();
    }
}
function btnPress(){
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userseq = [];
    level = 0;

}