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
            const groupedCourses = {};

            // Group courses by year level and semester
            data.courses.forEach(course => {
                let key = `${course.year_level} - ${course.sem}`;
                if (!groupedCourses[key]) {
                    groupedCourses[key] = [];
                }
                groupedCourses[key].push(course);
            });

            container.innerHTML = "<h3>Subjects Taken</h3>";

            // Create course grids
            Object.keys(groupedCourses).forEach(key => {
                let section = document.createElement("div");
                section.classList.add("course-section");

                let header = document.createElement("h4");
                header.textContent = key;
                section.appendChild(header);

                let grid = document.createElement("div");
                grid.classList.add("course-grid");

                groupedCourses[key].forEach(course => {
                    let courseElement = document.createElement("div");
                    courseElement.classList.add("course-card");
                    courseElement.innerHTML = `<strong>${course.code}</strong><br>${course.description}<br>(${course.credit} Credits)`;
                    grid.appendChild(courseElement);
                });

                section.appendChild(grid);
                container.appendChild(section);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});
