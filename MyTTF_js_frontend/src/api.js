class Api {
    constructor(data) {
        // debugger
        this.player = new Player(data)
        this.matches = data.matches.map(match => new Match(match))
    }
}

 