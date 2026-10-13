const result = document.getElementById("result");

async function getNotes() {
    try {
        const response = await fetch("http://localhost:3000/api/notes");
        const allNotes = await response.json();
        console.log(allNotes);

        allNotes.forEach((notes) => {
            result.innerHTML += `
            <div>
            <h3>Note Title : ${notes.title}</h3>
            <p>Content : ${notes.content}</p>
            </div>`
        })
    } catch(error) {
        console.log(error);
    }
}
getNotes()