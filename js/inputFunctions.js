
let playerNameInput=document.querySelector("input[type=text]");
let startGameBtn = document.getElementById("startGame");
let startGamelink=document.querySelector("#startGame span a");
let errorMessage=document.getElementById("errorMessage");
startGameBtn.addEventListener('click' ,function(){

        if(playerNameInput.value == ""){
            errorMessage.innerHTML="Please Enter Yor Name";
            
        }
        else if(isNaN(playerNameInput.value) == false){
            errorMessage.innerHTML="Please Enter Characters";
        }
        else{
            startGamelink.setAttribute('href','game.html');
            localStorage.setItem("userName",playerNameInput.value);
            errorMessage.innerHTML="";
        }
        
    });
    

function load(){
    document.getElementById("loader-container").style.display='none';
}
