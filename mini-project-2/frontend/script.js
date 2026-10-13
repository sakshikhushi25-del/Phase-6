const form = document.getElementById("student-form");
const nameInput = document.getElementById("name");
const courseInput = document.getElementById("course");
const completionInput = document.getElementById("completion");
const content = document.getElementById("message");

form.addEventListener("submit", async(event) => {
    event.preventDefault();
    const progress = {
        studentName: nameInput.value,
        courseName: courseInput.value,
        completionPercentage: completionInput.value
    }
    
    if(progress.completionPercentage < 0 || progress.completionPercentage > 100){
        content.textContent = "Please enter percentage between 0-100";
        return;
    }

    try {
        const response = await fetch("http://localhost:3000/progress", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(progress)
        })
        const data = await response.json();
        console.log(data);

        if(response.ok) {
            content.textContent = "Progress saved successfully";
            form.reset();
        } else {
            content.textContent = "Failed to save progress";
        }
    } catch(error) {
        console.log(error);
        content.textContent = "Something went wrong";
    }
})
