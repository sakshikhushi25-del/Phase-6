const result = document.getElementById("contacts");

async function getContact() {
    try {
        const response = await fetch("http://localhost:5000/contacts");
        const allContact = await response.json();
        console.log(allContact);

        allContact.forEach((contactData) => {
            result.innerHTML += `
        <div>
        <h3>Name : ${contactData.name}</h3>
        <p><b>Rating : </b>${contactData.email}</p>
        <p><b>Comment : </b>${contactData.message}</p>
        <p><b>Date: </b>${new Date(contactData.submissionDate).toLocaleString()}</p>
        </div>`
        })
    } catch(error) {
        console.log(error)
    }
}
getContact();