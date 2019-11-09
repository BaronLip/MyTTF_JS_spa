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
    
    // new(e) {
    //     debugger
    //     e.preventDefault();

    //     const date = e.target.date.value
    //     const title = e.target.title.value
    //     const notes = e.target.notes.value

    //     fetch(`http://localhost:3000/api/players/${player_id}/matches`, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({
    //             match: {
    //                 date: date,
    //                 title: title,
    //                 notes: notes,
    //                 player_id: player_id
    //             }
    //         })
    //     })
    //     .then((response) => response.json())
    //     .then((match) => {
    //         new Match(match)
    //     })
    //     .catch((error) => console.log(error))
    // }
}
