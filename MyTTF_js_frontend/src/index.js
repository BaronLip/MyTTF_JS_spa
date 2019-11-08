document.addEventListener("DOMContentLoaded", Api.loadPage);
const player_id = 1
    // // Shifted this to api.js
    // function loadPage() {
    //     fetch(`http://localhost:3000/api/players/${player_id}`)
    //     // How would you beable to fetch from a dynamic URL?
    //     .then(function(response) {
    //         return response.json()
    //     })
    //     .then(function(player) {
    //         console.log(player)
    //         renderPlayer(player);
    //         renderPlayerMatches(player);
    //     })
    // }

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

// Render in matches info.
function renderPlayerMatches(player) {
    const allMatchesDiv = document.getElementById("all-matches")
    // Reversed matches to have the latest up top.
    let matches = player.matches.reverse();
    
    matches.forEach((match) => {
        const button = document.createElement("button");
        // button.type = "button"
        button.innerHTML = "highlight"
        button.className = ""
        button.setAttribute("data-id", match.id);
        
        const matchItem = document.createElement("a");
        const brEl = document.createElement("br");
        
        // Format list item.
        matchItem.innerHTML = ` ${match.date} - ${match.title.bold()} - ${match.notes}`;
        
        // Append elements to div.
        allMatchesDiv.appendChild(button);
        allMatchesDiv.appendChild(matchItem);
        allMatchesDiv.appendChild(brEl);
    })
}        

document.getElementById("new-match-form").addEventListener("submit", newMatch)
function newMatch(e) {
    e.preventDefault();

    const date = e.target.date.value
    const title = e.target.title.value
    const notes = e.target.notes.value

    fetch(`http://localhost:3000/api/players/${player_id}/matches`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // Due to strong params in matches_controller, "match_params", create a match object first. Then, add the attributes to the keys.
            match: {
                date: date,
                title: title,
                notes: notes,
                player_id: player_id
            }
        })
    })
    .then((response) => response.json())
    .then((match) => {
        renderMatch(match)
    })
    .catch((error) => console.log(error))
}

function renderMatch(match) {
    const allMatchesDiv = document.getElementById("all-matches")
        
    const button = document.createElement("button");
    // checkbox.type = "checkbox"
    button.innerHTML = "highlight"
    button.className = ""
    button.setAttribute("data-id", match.id);
    
    const matchItem = document.createElement("a");
    const brEl = document.createElement("br");
    
    // Format list item.
    matchItem.innerHTML = ` ${match.date} - ${match.title.bold()} - ${match.notes}`;

    // Append elements to div.
    allMatchesDiv.insertBefore(brEl, allMatchesDiv.firstChild)
    allMatchesDiv.insertBefore(matchItem, allMatchesDiv.firstChild)
    allMatchesDiv.insertBefore(button, allMatchesDiv.firstChild)
    
    // Clear the form.
    const form = document.getElementById("new-match-form");
    form.reset();
}


// !!!Eventlisteners are able to listen to child elements!!!
document.getElementById("all-matches").addEventListener("click", highlight)

function highlight(e) {
    const textEl = e.target.nextSibling

    if (textEl.getAttribute("class") === null) {
        textEl.setAttribute("class", "highlight");
        textEl.setAttribute("style", "color: brown");
    } else {
        textEl.removeAttribute("class")
        textEl.removeAttribute("style")
    }
}