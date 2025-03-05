async function loadCourses() {
    try {
      // Fetch courses from JSON file
      const response = await fetch("courses.json");
      const data = await response.json();
  
      // Get the container element
      const gridContainer = document.getElementById("grid-container");
  
      // Generate grid items for each course
      data.courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.className = "course-card";
  
        courseCard.innerHTML = `
          <h3>${course.code} - ${course.description}</h3>
          <p><strong>Year Level:</strong> ${course.year_level}</p>
          <p><strong>Semester:</strong> ${course.sem}</p>
          <p><strong>Credits:</strong> ${course.credit}</p>
        `;
  
        gridContainer.appendChild(courseCard);
      });
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  }
  
  // Call the function to load courses
  loadCourses();
  