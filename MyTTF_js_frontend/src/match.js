class Match {
    static all = []

    constructor(matchesData) {
        // console.log(matchesData)
        this.player_id = matchesData.player_id;
        this.date = matchesData.date;
        this.title = matchesData.title;
        this.notes = matchesData.notes;

        Match.all.push(this);

        this.renderMatches(matchesData);
    }

    renderMatches(matchesData) {
        console.log(matchesData)
        // Locate all-matches div.
        const allMatchesDiv = document.getElementById("all-matches")

        // Create wrapper div for each match.
        const matchDiv = document.createElement("div");
        matchDiv.setAttribute("data-id", matchesData.id);
        matchDiv.setAttribute("id", matchesData.id);

        // Create content for each match.
        const highlightButton = document.createElement("button");
        highlightButton.innerHTML = "highlight";
        highlightButton.className = "highlight";
        highlightButton.setAttribute("data-id", matchesData.id);
        highlightButton.addEventListener("click", highlight);

        const matchItem = document.createElement("a");
        matchItem.setAttribute("class", "")
        const brEl = document.createElement("br");

        const editButton = document.createElement("button");
        editButton.innerHTML = "edit";
        editButton.className = "edit";
        editButton.setAttribute("data-id", matchesData.id);
        editButton.setAttribute("type", "button");
        editButton.setAttribute("class", "btn btn-info btn-lg");
        editButton.setAttribute("data-toggle", "modal");
        editButton.setAttribute("data-target", "#editModal");

        // Below is jQuery/Boostrap to add the data-id to the modal inputs. 
        $('#editModal').on('show.bs.modal', function (event) {
            let button = $(event.relatedTarget);
            let id = button.data('id');
            let modal = $(this)
            modal.find('.modal-body form').attr("data-id", id)
            modal.find(':submit').attr("data-toggle", "modal")
            modal.find(':submit').attr("data-target", "#editModal")
        })

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "delete";
        deleteButton.className = "delete";
        deleteButton.setAttribute("data-id", matchesData.id);
        deleteButton.addEventListener("click", deleteMatch);
        
        // Format list item.
        matchItem.innerHTML = ` ${matchesData.date} - ${matchesData.title.bold()} - ${matchesData.notes}`;

        // InsertBefore into allMatchesDiv to have newest on top.
        allMatchesDiv.insertBefore(matchDiv, allMatchesDiv.childNodes[0]);

        // Append elements into matchDiv.
        matchDiv.appendChild(highlightButton);
        matchDiv.appendChild(matchItem);
        matchDiv.appendChild(editButton);
        matchDiv.appendChild(deleteButton);
        matchDiv.appendChild(brEl);

        const newMatchForm = document.getElementById("new-match-form");
        newMatchForm.reset(); // Clears the form inputs.
        return false; // Prevents page refresh.
    }    

    edit(matchData) {
        console.log(matchData)
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
