document.addEventListener("DOMContentLoaded", function () {
    const coursesContainer = document.getElementById("courses-container");
    const searchBar = document.getElementById("search-bar");

    fetch("courses.json")
        .then(response => response.json())
        .then(data => {
            let courses = data.courses;
            displayCourses(courses);

            searchBar.addEventListener("input", function () {
                let searchTerm = searchBar.value.toLowerCase().trim();
                let filteredCourses = courses.filter(course =>
                    course.description.toLowerCase().includes(searchTerm) ||
                    course.code.toLowerCase().includes(searchTerm)
                );
                displayCourses(filteredCourses);
            });
        });

    function displayCourses(courses) {
        coursesContainer.innerHTML = ""; // Clear previous results
        if (courses.length === 0) {
            coursesContainer.innerHTML = "<p>No courses found.</p>";
            return;
        }

        courses.forEach(course => {
            let courseElement = document.createElement("p");
            courseElement.textContent = `${course.year_level} Year, ${course.sem} Sem - ${course.code}: ${course.description} (${course.credit} credits)`;
            coursesContainer.appendChild(courseElement);
        });
    }
});
