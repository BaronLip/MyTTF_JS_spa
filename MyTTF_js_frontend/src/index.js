document.addEventListener("DOMContentLoaded", playerPage)
const player_id = 1
function playerPage() {
    fetch(`http://localhost:3000/api/players/${player_id}`)
    // How would you beable to fetch from a dynamic URL?
    .then(function(response) {
        return response.json()
    })
    .then(function(player) {
        console.log(player)
        renderPlayer(player);
    })

    function renderPlayer(player) {
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
        
        profileEquipDiv[0].appendChild(equipHeader);
        profileEquipDiv[0].appendChild(blade);
        profileEquipDiv[0].appendChild(redRubber);
        profileEquipDiv[0].appendChild(blackRubber);
    }

    // function PlayerMatches(matchesArray) {
    //     const allMatchesDiv = document.getElementById("all-matches")

    //     fetch(`http://localhost:3000/api/player/${player_id}/matches`)
    //         .then(function (response) {
    //             return response.json()
    //         })
    //         .then(function (matches) {
    //             console.log(playerMatches);
    //             renderPlayerMatches(matches);
    //         })


    // } 
}

document.getElementById("new-match-form").addEventListener("submit", newMatch)

function newMatch(e) {
    e.preventDefault();
    // console.log("hello")
    const title = e.target.title.value
    const notes = e.target.notes.value
    console.log(title)
    console.log(notes)
    console.log(player_id)

    fetch(`http://localhost:3000/api/players/${player_id}/matches`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // Due to strong params in matches_controller, "match_params", create a match object first. Then, add the attributes to the keys.
            match: {
                title: title,
                notes: notes,
                player_id: player_id
            }
        })
    })
    .then((response) => response.json())
    // Make sure to render out the match.
    .then((match) => console.log(match))
    .catch((error) => console.log(error))
}

