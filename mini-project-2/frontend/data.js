const result = document.getElementById("result");

async function getProgress() {
    try {
        const response = await fetch("http://localhost:3000/progress");
        const progressData = await response.json();
        console.log(progressData);

        progressData.forEach((progress) => {
            result.innerHTML += `<div class="progress-card">
                    <h3>Student Name : ${progress.studentName}</h3>
                    <p>Course : ${progress.courseName}</p>
                    <p>Completion : ${progress.completionPercentage}%</p>
                </div>`
        });
    } catch (error) {
        console.log(error)
    }
}
getProgress();