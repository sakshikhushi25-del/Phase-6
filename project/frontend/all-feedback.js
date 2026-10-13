const result = document.getElementById("feedbackResult");

async function getFeedback() {
    try {
        const response = await fetch("http://localhost:5000/feedback");
        const allFeedback = await response.json();
        console.log(allFeedback);

        allFeedback.forEach((feedback) => {
            result.innerHTML += `
        <div>
        <h3>Name : ${feedback.name}</h3>
        <p>Rating : ${feedback.rating}</p>
        <p>Comment : ${feedback.comments}</p>
        </div>`
        })
    } catch(error) {
        console.log(error)
    }
}
getFeedback();