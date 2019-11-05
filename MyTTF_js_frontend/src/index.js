document.addEventListener("DOMContentLoaded", playerPage)

function playerPage() {
    fetch("http://localhost:3000/api/players/1")
    // How would you beable to fetch from a dynamic URL?
    .then(function(response) {
        return response.json()
    })
    .then(function(player) {
        console.log(player);
        createPlayer(player);
    })

    function createPlayer(player) {
        const profileInfoDiv = document.getElementsByClassName("profile-info")
        // create Player profile based on player.
        
        const infoHeader = document.createElement("h3")
        infoHeader.innerText = "Profile:"
        
        const userName = document.createElement("p")
        userName.innerText = `name: ${player.username}`
        
        const age = document.createElement("p")
        age.innerText = `age :${player.age}`
        
        const gender = document.createElement("p")
        gender.innerText = `gender :${player.gender}`
        
        const hand = document.createElement("p")
        hand.innerText = `hand: ${player.hand}`
        
        
        // Putting it together.
        profileInfoDiv[0].appendChild(infoHeader)
        profileInfoDiv[0].appendChild(userName)
        profileInfoDiv[0].appendChild(age)
        profileInfoDiv[0].appendChild(gender)
        profileInfoDiv[0].appendChild(hand)
        
        
        // Add stats in separate div.
        const profileStatsDiv = document.getElementsByClassName("profile-stats")
        
        const statsHeader = document.createElement("h3")
        statsHeader.innerText = "Stats:"
        
        const wins = document.createElement("p")
        wins.innerText = `wins: ${player.wins}`
        
        const losses = document.createElement("p")
        losses.innerText = `losses: ${player.losses}`
        
        const rating = document.createElement("p")
        rating.innerText = `rating: ${player.rating}`

        const style = document.createElement("p")
        style.innerText = `style: ${player.style}`

        
        profileStatsDiv[0].appendChild(statsHeader)
        profileStatsDiv[0].appendChild(wins)
        profileStatsDiv[0].appendChild(losses)
        profileStatsDiv[0].appendChild(rating)
        profileStatsDiv[0].appendChild(style)
        

        const profileEquipDiv = document.getElementsByClassName("profile-equip")
        
        const equipHeader = document.createElement("h3")
        equipHeader.innerText = "Equipment:"
        
        const blade = document.createElement("p")
        blade.innerText = `blade: ${player.blade}`
        
        const redRubber = document.createElement("p")
        redRubber.innerText = `red rubber: ${player.red_rubber}`
        
        const blackRubber = document.createElement("p")
        blackRubber.innerText = `black rubber: ${player.black_rubber}`
        
        profileEquipDiv[0].appendChild(equipHeader)
        profileEquipDiv[0].appendChild(blade)
        profileEquipDiv[0].appendChild(redRubber)
        profileEquipDiv[0].appendChild(blackRubber)
    }

}

document.getElementById("new-match-form").addEventListener("submit", newMatch)


function newMatch(e) {
    e.preventDefault();
    // console.log("hello")
    fetch("localhost:3000/api/matches", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: e.match.value
        })

    })
}