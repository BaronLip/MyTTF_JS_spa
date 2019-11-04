document.addEventListener("DOMContentLoaded", playerPage)

function playerPage() {
    fetch("http://localhost:3000/api/players/1")
    // How would you beable to fetch from a dynamic URL?
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        createPlayer(data);
    })

    function createPlayer(data) {
        const profileContainer = document.getElementById("profile-container")
        // create Player profile based on data.
        const playerProfile = document.createElement("div")
        
        const playerName = document.createElement("h1")
        playerName.innerText = `${data.username}`
        
        // Putting it all together.
        profileContainer.appendChild(playerProfile)
        playerProfile.appendChild(playerName)
    }

}

// document.getElementById("new-match-form").addEventListener("submit", newMatch)


// function newMatch(e) {
//     e.preventDefault()
//     // console.log("hello")
//     fetch("localhost:3000/api/matches", {
//         method: "post",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             name: e.match.value
//         })

//     })
// }