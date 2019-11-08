class Api {
    static baseUrl = "http://localhost:3000"
    
    static loadPage() {
        fetch(Api.baseUrl + `/api/players/${player_id}`)
        .then(function (response) {
        return response.json()
        })
        .then(function (player) {
            console.log(player)
            renderPlayer(player);
            renderPlayerMatches(player);
        })
    }
}