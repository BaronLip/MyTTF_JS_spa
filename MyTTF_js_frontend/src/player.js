class Player {
    static all = []

    constructor(username, gender, hand, style, blade, red_rubber, black_rubber, email, rating, wins, losses, age) {
        this.username = username;
        this.gender = gender;
        this.hand = hand;
        this.style = style;
        this.blade = blade;
        this.red_rubber = red_rubber;
        this.black_rubber = black_rubber;
        this.email = email;
        this.rating = rating;
        this.wins = wins;
        this.losses = losses;
        this.age = age;
        
        Player.all.push(this);
    }

    // // May not need this.
    // matches() {
    //     Match.all.filter(match => match.player.username === this.username)
    // }

    
}