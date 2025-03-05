document.addEventListener("DOMContentLoaded", function () {
    let container = document.getElementById("courses-container");

    if (!container) {
        console.error("Error: #courses-container not found!");
        return;
    }

    fetch("courses.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load courses.json");
            }
            return response.json();
        })
        .then(data => {
            container.innerHTML = "<h3>Subjects Taken</h3>";

            let groupedCourses = {};

            // Group courses by year level and semester
            data.courses.forEach(course => {
                let key = `${course.year_level} Year - ${course.sem} Sem`;
                if (!groupedCourses[key]) {
                    groupedCourses[key] = [];
                }
                groupedCourses[key].push(course);
            });

            // Create grid layout
            for (let group in groupedCourses) {
                let section = document.createElement("div");
                section.classList.add("course-group");

                let title = document.createElement("h4");
                title.textContent = group;
                section.appendChild(title);

                let courseGrid = document.createElement("div");
                courseGrid.classList.add("course-grid");

                groupedCourses[group].forEach(course => {
                    let courseCard = document.createElement("div");
                    courseCard.classList.add("course-card");
                    courseCard.innerHTML = `
                        <strong>${course.code}</strong><br>
                        ${course.description}<br>
                        <small>${course.credit} Credits</small>
                    `;
                    courseGrid.appendChild(courseCard);
                });

                section.appendChild(courseGrid);
                container.appendChild(section);
            }
        })
        .catch(error => console.error("Error loading JSON:", error));
});
