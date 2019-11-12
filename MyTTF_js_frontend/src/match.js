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

        this.render();
    }

    render() {
        // Locate all-matches div.
        const allMatchesDiv = document.getElementById("all-matches")

        // Create wrapper div for each match.
        const matchDiv = document.createElement("div");
        matchDiv.setAttribute("data-id", this.id);
        matchDiv.setAttribute("id", this.id);

        // Create content for each match.
        matchDiv.innerHTML = `
            <button class="highlight btn-info btn-sm" data-id="${this.id}">highlight</button>
            
            <a id="matchText" class=""> ${this.date} - ${this.title.bold()} - ${this.notes}</a>
            
            <button class="edit btn-info btn-sm" data-id="${this.id}" type="button" data-toggle="modal" data-target="#editModal">edit</button>
            
            <button class="delete btn-info btn-sm" data-id="${this.id}">delete</button>
            
            <br>
        `

        // Below is jQuery/Boostrap to add the data-id to the modal inputs. 
        $('#editModal').on('show.bs.modal', function (event) {
            debugger
            let id = event.relatedTarget.dataset.id;
            let modal = $(this);
            modal.find('.modal-body form').attr("data-id", id);
            modal.find(':submit').attr("data-toggle", "modal");
            modal.find(':submit').attr("data-target", "#editModal");
        })

        allMatchesDiv.insertBefore(matchDiv, allMatchesDiv.childNodes[0]);

        const highlightButton = document.getElementsByClassName("highlight");
        highlightButton[0].addEventListener("click", this.highlight);

        const editSubmitButton = document.getElementById("edit-match-form");
        editSubmitButton.addEventListener("submit", this.edit);
        
        const deleteButton = document.getElementsByClassName("delete");
        deleteButton[0].addEventListener("click", this.delete);

        const newMatchForm = document.getElementById("new-match-form");
        newMatchForm.reset(); // Clears the form inputs.
        return false; // Prevents page refresh.
    }    

    edit(e) {
        e.preventDefault();
        console.log(e.target.dataset.id)
        
        const matchId = e.target.dataset.id;
        const date = document.getElementById("date").value
        const title = document.getElementById("title").value
        const notes = document.getElementById("notes").value
        
        fetch(`http://localhost:3000/api/players/${player_id}/matches/${matchId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                match: {
                    id: matchId,
                    date: date,
                    title: title,
                    notes: notes,
                    player_id: player_id
                }
            })
        })
        .then((response) => response.json())
        .then((matchData) => {
            console.log(matchData)
            const matchText = document.getElementById("matchText")
            matchText.innerHTML = `${matchData.date} - ${matchData.title.bold()} - ${matchData.notes}`
        })
        .catch((error) => console.log(error))
    }

    delete(e) {
        e.preventDefault();
        const matchId = e.target.dataset.id;

        fetch(`http://localhost:3000/api/players/${player_id}/matches/${matchId}`, { method: "DELETE" });

        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        }
        window.alert("Match deleted.")
    }

    highlight(e) {
        e.preventDefault();
        const content = this.nextElementSibling;

        if (content.getAttribute("class") === "") {
            content.setAttribute("class", "highlighted");
            content.setAttribute("style", "color: brown");
        } else {
            content.setAttribute("class", "");
            content.setAttribute("style", "");
        }
    }
}
