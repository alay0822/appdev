document.addEventListener("DOMContentLoaded", function () { 
    let container = document.getElementById("courses-container");

    if (!container) {
        console.error("Error: #courses-container not found!");
        return;
    }

    fetch("courses.json") // Ensure this file is in the correct path
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load courses.json");
            }
            return response.json();
        })
        .then(data => {
            container.innerHTML = "<h3>Subjects Taken</h3>";
            data.courses.forEach(course => {
                let courseElement = document.createElement("p");
                courseElement.textContent = `${course.year_level} Year, ${course.sem} Sem - ${course.code}: ${course.description} (${course.credit} Credits)`;
                container.appendChild(courseElement);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});


