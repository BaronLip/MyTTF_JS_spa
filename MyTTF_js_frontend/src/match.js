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
            <button class="highlight btn-info btn-sm" data-set-id="${this.id}">highlight</button>
            
            <a class=""> ${this.date} - ${this.title.bold()} - ${this.notes}</a>
            
            <button class="edit btn-info btn-sm" data-set-id="${this.id}" type="button" data-toggle="modal" data-target="#editModal">edit</button>
            
            <button class="delete btn-info btn-sm" data-set-id="${this.id}">delete</button>
            
            <br>
        `
        
        
        // highlightButton.innerHTML = "highlight";
        // highlightButton.className = "highlight";
        // highlightButton.setAttribute("data-id", this.id);
        

        // const matchItem = document.createElement("a");
        // matchItem.setAttribute("class", "")
        // const brEl = document.createElement("br");

        // const editButton = document.createElement("button");
        // editButton.innerHTML = "edit";
        // editButton.className = "edit";
        // editButton.setAttribute("data-id", this.id);
        // editButton.setAttribute("type", "button");
        // editButton.setAttribute("class", "btn btn-info btn-lg");
        // editButton.setAttribute("data-toggle", "modal");
        // editButton.setAttribute("data-target", "#editModal");

        // Below is jQuery/Boostrap to add the data-id to the modal inputs. 
        $('#editModal').on('show.bs.modal', function (event) {
            let button = $(event.relatedTarget);
            let id = button.data('id');
            let modal = $(this)
            modal.find('.modal-body form').attr("data-id", id)
            modal.find(':submit').attr("data-toggle", "modal")
            modal.find(':submit').attr("data-target", "#editModal")
        })

        allMatchesDiv.insertBefore(matchDiv, allMatchesDiv.childNodes[0]);

        const highlightButton = document.getElementsByClassName("highlight");
        highlightButton[0].addEventListener("click", this.highlight);

        const deleteButton = document.getElementsByClassName("delete");
        deleteButton[0].addEventListener("click", this.delete);
        // deleteButton.innerHTML = "delete";
        // deleteButton.className = "delete";
        // deleteButton.setAttribute("data-id", this.id);
        
        // Format list item.
        // matchItem.innerHTML = ` ${this.date} - ${this.title.bold()} - ${this.notes}`;

        // InsertBefore into allMatchesDiv to have newest on top.
        // allMatchesDiv.insertBefore(matchDiv, allMatchesDiv.childNodes[0]);

        // Append elements into matchDiv.
        // matchDiv.appendChild(highlightButton);
        // matchDiv.appendChild(matchItem);
        // matchDiv.appendChild(editButton);
        // matchDiv.appendChild(deleteButton);
        // matchDiv.appendChild(brEl);

        const newMatchForm = document.getElementById("new-match-form");
        newMatchForm.reset(); // Clears the form inputs.
        return false; // Prevents page refresh.
    }    

    static edit() {
        console.log("I'm hitting this function!")
    }

    delete(e) {
        e.preventDefault();
        const matchId = e.target.dataset.id;

        fetch(`http://localhost:3000/api/players/${player_id}/matches/${matchId}`, { method: "DELETE" });

        if (e.target.className === "delete") {
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
