class Match {
    static all = []

    constructor(data) {
        console.log(data)
        this.player_id = data.player_id;
        this.date = data.date;
        this.title = data.title;
        this.notes = data.notes;

        Match.all.push(this);

        this.render(data)
    }

    render(matches) {
        const allMatchesDiv = document.getElementById("all-matches")
        // Reversed matches to have the latest up top.
        let matches = player.matches.reverse();

        matches.forEach((match) => {
            // create wrapper div for each match.
            const matchDiv = document.createElement("div");
            matchDiv.setAttribute("data-id", match.id);
            matchDiv.setAttribute("id", match.id);

            // Create content for each match.
            const button = document.createElement("button");
            button.innerHTML = "highlight";
            button.setAttribute("data-id", match.id);

            const matchItem = document.createElement("a");
            const brEl = document.createElement("br");

            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = "delete";
            deleteButton.className = "delete";
            deleteButton.setAttribute("data-id", match.id);

            // Format list item.
            matchItem.innerHTML = ` ${match.date} - ${match.title.bold()} - ${match.notes}`;

            // Append matchDiv into allMatchesDiv.
            allMatchesDiv.appendChild(matchDiv);

            // Append elements into matchDiv.
            matchDiv.appendChild(button);
            matchDiv.appendChild(matchItem);
            matchDiv.appendChild(deleteButton);
            matchDiv.appendChild(brEl);
        })
    }        
}
