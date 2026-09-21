const form = document.getElementById("contactForm");
const result = document.getElementById("result");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const contactData = {
        name: nameInput.value.trim(),
        email: emailInput.value,
        message: messageInput.value
    }
    try {
        const response = await fetch("http://localhost:5000/submit-contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contactData)
        });
        const data = await response.text();
        result.textContent = data;
        form.reset();
    } catch(error) {
        result.textContent = "Something went wrong";
        console.log(error);
    }
})