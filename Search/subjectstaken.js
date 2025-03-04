document.addEventListener("DOMContentLoaded", function () {
    fetch("courses.json")
        .then(response => response.json())
        .then(data => {
            const coursesContainer = document.getElementById("courses-container");
            const searchBar = document.createElement("input");
            
            // Set up search bar
            searchBar.setAttribute("type", "text");
            searchBar.setAttribute("id", "search-bar");
            searchBar.setAttribute("placeholder", "Search subjects...");
            coursesContainer.before(searchBar);

            function displayCourses(filterText = "") {
                coursesContainer.innerHTML = ""; // Clear previous results
                data.courses.forEach(course => {
                    if (course.description.toLowerCase().includes(filterText.toLowerCase())) {
                        const p = document.createElement("p");
                        p.textContent = `${course.year_level}, ${course.sem} - ${course.code}: ${course.description} (${course.credit} Credits)`;
                        coursesContainer.appendChild(p);
                    }
                });
            }

            // Initial display of courses
            displayCourses();

            // Listen for input changes
            searchBar.addEventListener("input", (e) => {
                displayCourses(e.target.value);
            });
        })
        .catch(error => console.error("Error loading courses:", error));
});
