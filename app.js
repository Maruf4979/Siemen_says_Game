let gameSeq = [];
let userSeq = [];
let color = ["red", "yellow", "blue", "purple"];
let level = 0;
let started = false;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(event) {
    if (started == false) {
        console.log("game is stared");
        started = true;
        levelup();
    }
});

function gameFlash(btns) {
    btns.classList.add("gameflash");
    setTimeout(function() {
        btns.classList.remove("gameflash");
    }, 250);
}

function userFlash(btns) {
    btns.classList.add("userflash");
    setTimeout(function() {
        btns.classList.remove("userflash");
    }, 250);
}


function checkCol(ind) {
    if (userSeq[ind] === gameSeq[ind]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game over! your score was <b>${level} </b> <br> press any key to start again .`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();
    }
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let ranInd = Math.floor(Math.random() * 3);
    let ranCol = color[ranInd];
    let ranBtn = document.querySelector(`.${ranCol}`);
    // console.log(ranInd);
    // console.log(ranCol);
    // console.log(ranBtn);
    gameSeq.push(ranCol);
    console.log(gameSeq);
    gameFlash(ranBtn);
}
// user press the button
function btnPress() {
    // console.log(this); //curr.. btn
    let btn = this;
    userFlash(btn);
    userCol = btn.getAttribute("id");
    userSeq.push(userCol);
    checkCol(userSeq.length - 1);
    console.log(userSeq);
    console.log(userCol);
}
let allBtn = document.querySelectorAll(".btn");
for (btn of allBtn) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}