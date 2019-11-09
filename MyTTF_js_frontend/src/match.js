class Match {
    static all = []

    constructor(matchesData) {
        console.log(matchesData)
        this.player_id = matchesData.player_id;
        this.date = matchesData.date;
        this.title = matchesData.title;
        this.notes = matchesData.notes;

        Match.all.push(this);

        this.renderMatches(matchesData);
    }

    renderMatches(matchData) {
        
        const allMatchesDiv = document.getElementById("all-matches")

        // create wrapper div for each match.
        const matchDiv = document.createElement("div");
        matchDiv.setAttribute("data-id", matchData.id);
        matchDiv.setAttribute("id", matchData.id);

        // Create content for each match.
        const button = document.createElement("button");
        button.innerHTML = "highlight";
        button.setAttribute("data-id", matchData.id);

        const matchItem = document.createElement("a");
        const brEl = document.createElement("br");

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "delete";
        deleteButton.className = "delete";
        deleteButton.setAttribute("data-id", matchData.id);

        // Format list item.
        matchItem.innerHTML = ` ${matchData.date} - ${matchData.title.bold()} - ${matchData.notes}`;

        // InsertBefore into allMatchesDiv to have newest on top.
        allMatchesDiv.insertBefore(matchDiv, allMatchesDiv.childNodes[0]);

        // Append elements into matchDiv.
        matchDiv.appendChild(button);
        matchDiv.appendChild(matchItem);
        matchDiv.appendChild(deleteButton);
        matchDiv.appendChild(brEl);
    }        
}
