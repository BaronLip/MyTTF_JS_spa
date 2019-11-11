// document.addEventListener("DOMContentLoaded", Api.loadPage);

document.addEventListener("DOMContentLoaded", loadPage);

const baseUrl = "http://localhost:3000";
const player_id = 1

function loadPage() {
fetch(baseUrl + `/api/players/${player_id}`)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        new Api(data);
    })
    .catch(error => {
        console.log(error);
    })
}


// Create a Match.
document.getElementById("new-match-form").addEventListener("submit", newMatch);
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
        new Match(match)
    })
    .catch((error) => console.log(error))
}