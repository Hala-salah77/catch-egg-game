async function getLastGameDate(username) {
    let dateResponse = await fetch(`https://node-monge-iti-project.herokuapp.com/games/${username}`);
    let lastGameDate = await dateResponse.json();
    lastGameDate.date = new Date();
    let arraydate=lastGameDate.date.toLocaleString("en-US").split(",");
    document.querySelector('#lastGameDate .date1').innerHTML=arraydate[0];
    document.querySelector('#lastGameDate .date2').innerHTML=arraydate[1];
    console.log(arraydate);
} 

function saveGameDate(username) {
    let data = {
    name: username
    };

fetch('https://node-monge-iti-project.herokuapp.com/games', {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
});
}
