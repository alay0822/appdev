document.addEventListener("DOMContentLoaded", function () { 
    let container = document.getElementById("courses-container");
    if (!container) {
        console.error("Error: courses-container not found in HTML.");
        return;
    }
  
    fetch("courses.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            container.innerHTML = "<h2>Subjects Taken</h2>";
            data.courses.forEach(course => {
                let courseElement = document.createElement("p");
                courseElement.textContent = `${course.year_level} Year, ${course.sem} Sem - ${course.code}: ${course.description} (${course.credit} Credits)`;
                container.appendChild(courseElement);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
  });
  