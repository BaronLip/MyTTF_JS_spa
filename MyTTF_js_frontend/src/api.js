class Api {
    constructor(data) {
        this.player = new Player(data)
        this.matches = data.matches.map(match => new Match(match))
    }
}

 