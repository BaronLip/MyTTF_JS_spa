class Match {
    static all = []

    constructor(player_id, date, title, notes) {
        this.player_id = player_id;
        this.date = date;
        this.title = title;
        this.notes = notes;

        Match.all.push(this);
    }
    
}
