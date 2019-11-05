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
        const profileContainer = document.getElementById("profile-container")
        // create Player profile based on player.
        const playerProfile = document.createElement("div")
        
        const userName = document.createElement("h1")
        userName.innerText = `${player.username}`
        
        const age = document.createElement("p")
        age.innerText = `age :${player.age}`
        
        const rating = document.createElement("p")
        rating.innerText = `rating: ${player.rating}`


        
        // Putting it together.
        profileContainer.appendChild(playerProfile)
        playerProfile.appendChild(userName)
        playerProfile.appendChild(age)
        playerProfile.appendChild(rating)
    }

}

document.getElementById("new-match-form").addEventListener("submit", newMatch)


function newMatch(e) {
    e.preventDefault()
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