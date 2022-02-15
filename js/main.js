let x,
timer=60,
listOfEggs, 
counter = 0,
missedCounter=0;

eggs = [
    { left: Math.round(Math.random()*100)+200, top: Math.round(Math.random()*100)+30 },
    { left: Math.round(Math.random()*100)+500, top: Math.round(Math.random()*100) },
    { left: Math.round(Math.random()*100)+800, top: Math.round(Math.random()*100) },
    { left: Math.round(Math.random()*100)+900, top: Math.round(Math.random()*100) },
];

let containerDiv=document.getElementById("container");
let pause=document.getElementById("pause");
let backToGameBtm=document.getElementById("backBtn");
let basket=document.getElementById("basket");
let restartBox=document.getElementById("restartBox");
let restartBtn=document.getElementById("restartBtn");
let playerName = document.getElementById("playerName");
let missed=document.getElementById("missed");
let score=document.getElementById("score");
let finalScore=document.getElementById("finalScore");
let time=document.getElementById("time");
let timeInterval=setInterval(timerFunction, 1000);

score.innerHTML=` ${counter}`;
missed.innerHTML=` ${missedCounter}`;

//Get Name Of Player And Date

if(localStorage.getItem("userName") != null){
    playerName.innerHTML=localStorage.getItem("userName");
    getLastGameDate(localStorage.getItem("userName"));
}

//Move Basket
document.addEventListener("mousemove",function(e){
    if(e.clientX > window.innerWidth){
        basket.style.left=document.innerWidth+100 + "px";
        console.log(window.innerWidth)
    }
    else{
        basket.style.left=e.clientX + "px";
    }
})


gameLoop();

//Start Restart Menu
restartBtn.addEventListener("click",function(){
    missedCounter=0;
    counter=0;
    timer=60;
    eggs = [
        { left: Math.round(Math.random()*100)+200, top: Math.round(Math.random()*100)+30 },
        { left: Math.round(Math.random()*100)+500, top: Math.round(Math.random()*100) },
        { left: Math.round(Math.random()*100)+800, top: Math.round(Math.random()*100) },
        { left: Math.round(Math.random()*100)+900, top: Math.round(Math.random()*100) },
    ];
    missed.innerHTML=` ${missedCounter}`;
    score.innerHTML=` ${counter}`;
    restartBox.style.display="none";
    containerDiv.classList.remove("filter-blure");
    gameLoop();
})

//Start Pause Button And Menu
pause.addEventListener("click",function(){
    clearTimeout(x);
    clearInterval(timeInterval);
    document.getElementById("pauseBox").style.display="flex";
    containerDiv.classList.add("filter-blure");
    
})


backToGameBtm.addEventListener("click",function(){
    gameLoop();
    timeInterval=setInterval(timerFunction, 1000);
    document.getElementById("pauseBox").style.display="none";
    containerDiv.classList.remove("filter-blure");
})


