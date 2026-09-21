const form = document.getElementById("notes-form");
const message = document.getElementById("message");

const titleInput = document.getElementById("noteTitle");
const contentInput = document.getElementById("noteContent");

form.addEventListener("submit", async(event) => {
    event.preventDefault();
    const notes = {
        title: titleInput.value.trim(),
        content: contentInput.value
    }
    if(!notes.title) {
        message.textContent = "Please enter the title first";
        return;
    }
    try {
        const response = await fetch("http://localhost:3000/api/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(notes)
        })
        const data = await response.json();
        console.log(data);

        if(response.ok) {
            message.textContent = "Note saved successfully!";
            form.reset();
        } else {
            message.textContent = "Failed to save note";
        }
    } catch (error) {
        message.textContent =error.message|| "Something went wrong";
    }
})