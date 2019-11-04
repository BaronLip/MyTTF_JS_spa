document.addEventListener("DOMContentLoaded", playerPage)

function playerPage() {
    fetch("http://localhost:3000/api/players/1")
    // How would you beable to fetch from a dynamic URL?
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        
    })

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