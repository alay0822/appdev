async function fetchAndDisplayCourses() {
    try {
      // Fetch the JSON data
      const response = await fetch("courses.json");
      const data = await response.json();
  
      // Get the container element
      const gridContainer = document.getElementById("courses-grid");
  
      // Create course cards
      data.courses.forEach(course => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
  
        // Populate course details
        courseCard.innerHTML = `
          <h3>${course.year_level}, ${course.sem} - ${course.code}</h3>
          <p>${course.description}</p>
          <p><strong>Credits:</strong> ${course.credit}</p>
        `;
  
        // Add card to grid
        gridContainer.appendChild(courseCard);
      });
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  }
  
  // Load and display courses
  fetchAndDisplayCourses();
  