function timerFunction(){
if(timer >=0){
    time.innerHTML = `00:${timer}`;
}
else{
    saveGameDate(localStorage.getItem("userName"));
    clearTimeout(x);
    restartBox.style.display="flex";
    finalScore.innerHTML=counter;
    containerDiv.classList.add("filter-blure");
}
timer--;
}


function drawEggs(){
    document.getElementById("eggs").innerHTML = "";
    for (let e = 0; e < eggs.length; e++) 
    document.getElementById("eggs").innerHTML += `<div class='egg' style='left:${eggs[e].left}px; top:${eggs[e].top}px'></div>`;
    listOfEggs=Array.from(document.querySelectorAll("#eggs .egg"));
} 

function moveEggs(){
    for (let e = 0; e < eggs.length; e++){
        eggs[e].top = eggs[e].top + 5;      
    }
}

function collectEgges(){
    for(let i=0;i<listOfEggs.length;i++){
        if((listOfEggs[i].offsetLeft >=basket.offsetLeft+20) &&(listOfEggs[i].offsetLeft <=basket.offsetWidth+basket.offsetLeft) && (listOfEggs[i].offsetTop >= basket.offsetTop-50) && (listOfEggs[i].offsetTop <= basket.offsetTop+50) ){
            counter++;
            listOfEggs.splice(i,1);
            eggs.splice(i,1,{ left:Math.round(Math.random()*1000)+30, top:Math.round(Math.random()*10) });
            score.innerHTML=counter;
        }
        else if(eggs[i].top >= window.innerHeight-100){
            listOfEggs[i].classList.add('brokenEgg');
            listOfEggs.splice(i,1);
            eggs.splice(i,1,{ left:Math.round(Math.random()*1000)+30, top:Math.round(Math.random()*10) });
            missedCounter++;
            missed.innerHTML=` ${missedCounter}`;
            //clearTimeout(x);
            }
    }
}
function gameLoop(){
    x = (setTimeout(gameLoop, 70));//30
    moveEggs();
    drawEggs();
    collectEgges();
}

window.addEventListener('DOMContentLoaded', (event) => {
    
    document.getElementById("loader-container").style.display='none';
   
   
});