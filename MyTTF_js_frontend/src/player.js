class Player {
    static all = []

    constructor(data) {
        this.username = data.username;
        this.gender = data.gender;
        this.hand = data.hand;
        this.style = data.style;
        this.blade = data.blade;
        this.red_rubber = data.red_rubber;
        this.black_rubber = data.black_rubber;
        this.email = data.email;
        this.rating = data.rating;
        this.wins = data.wins;
        this.losses = data.losses;
        this.age = data.age;
        
        Player.all.push(this);

        this.render()
    }

    render() {
        const profileContainer = document.getElementById("profile-container")
        
        profileContainer.innerHTML = `
        <div class="row">
        <div class="col-sm-4 profile-info">
        <h3>Profile:</h3>
        <p>name: ${this.username}</p>
        <p>age: ${this.age}</p>
        <p>gender: ${this.gender}</p>
        <p>hand: ${this.hand}</p>
        </div>
        <div class="col-sm-4 profile-stats">
        <h3>Stats:</h3>
        <p>wins: ${this.wins}</p>
        <p>losses: ${this.losses}</p>
        <p>rating: ${this.rating}</p>
        <p>style: ${this.style}</p>
        </div>
        <div class="col-sm-4 profile-equip">
        <h3>Equipment:</h3>
        <p>blade: ${this.blade}</p>
        <p>red rubber: ${this.red_rubber}</p>
        <p>black rubber: ${this.black_rubber}</p>
        <button id="like">Like</button>
        <p id="count">0</p>
        </div>
        </div>
        `
        const button = document.getElementById("like")
        button.addEventListener("click", this.like)
    }
    

    like() {
        const number = document.getElementById("count")
        const count = parseInt(number.innerHTML) + 1
        number.innerHTML = count 
    }

}
// // May use in the future.
// matches() {
//     Match.all.filter(match => match.player.username === this.username)
// }