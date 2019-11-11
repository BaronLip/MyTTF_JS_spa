class Match {
    
    static all = []

    constructor(matchData) {
        // console.log(matchData)
        this.id = matchData.id
        this.player_id = matchData.player_id;
        this.date = matchData.date;
        this.title = matchData.title;
        this.notes = matchData.notes;

        Match.all.push(this);

        this.renderMatch();
    }

    renderMatch() {
        // Locate all-matches div.
        const allMatchesDiv = document.getElementById("all-matches")

        // Create wrapper div for each match.
        const matchDiv = document.createElement("div");
        matchDiv.setAttribute("data-id", this.id);
        matchDiv.setAttribute("id", this.id);

        // Create content for each match.
        const highlightButton = document.createElement("button");
        highlightButton.innerHTML = "highlight";
        highlightButton.className = "highlight";
        highlightButton.setAttribute("data-id", this.id);
        highlightButton.addEventListener("click", highlight);

        const matchItem = document.createElement("a");
        matchItem.setAttribute("class", "")
        const brEl = document.createElement("br");

        const editButton = document.createElement("button");
        editButton.innerHTML = "edit";
        editButton.className = "edit";
        editButton.setAttribute("data-id", this.id);
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
        deleteButton.setAttribute("data-id", this.id);
        deleteButton.addEventListener("click", deleteMatch);
        
        // Format list item.
        matchItem.innerHTML = ` ${this.date} - ${this.title.bold()} - ${this.notes}`;

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

    static edit() {
        console.log("I'm hitting this function!")
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
