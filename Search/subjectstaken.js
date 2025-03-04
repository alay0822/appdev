document.addEventListener("DOMContentLoaded", function () { 
    let searchBar = document.getElementById("search-bar");
    let container = document.getElementById("courses-container");

    if (!searchBar || !container) {
        console.error("Error: Elements not found!");
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
            let courses = data.courses;
            let coursesList = document.createElement("div");

            function displayCourses(filter = "") {
                coursesList.innerHTML = ""; // Clear previous results
                let filteredCourses = courses.filter(course =>
                    course.description.toLowerCase().includes(filter.toLowerCase()) ||
                    course.code.toLowerCase().includes(filter.toLowerCase())
                );

                if (filteredCourses.length === 0) {
                    coursesList.innerHTML = "<p>No courses found.</p>";
                } else {
                    filteredCourses.forEach(course => {
                        let courseElement = document.createElement("p");
                        courseElement.textContent = `${course.year_level} Year, ${course.sem} Sem - ${course.code}: ${course.description} (${course.credit} Credits)`;
                        coursesList.appendChild(courseElement);
                    });
                }
            }

            // Initial Display
            displayCourses();

            // Add search functionality
            searchBar.addEventListener("input", function () {
                displayCourses(this.value);
            });

            container.appendChild(coursesList);
        })
        .catch(error => console.error("Error loading JSON:", error));
});
