const courses = [
    { "year_level": "1st", "sem": "1st", "code": "IT111", "description": "Introduction to Computing", "credit": "3.0" },
    { "year_level": "1st", "sem": "1st", "code": "IT112", "description": "Computer Programming 1", "credit": "3.0" },
    { "year_level": "1st", "sem": "1st", "code": "PurCom", "description": "Purposive Communication", "credit": "3.0" },
    { "year_level": "1st", "sem": "2nd", "code": "IT121", "description": "Computer Programming 2", "credit": "3.0" },
    { "year_level": "2nd", "sem": "1st", "code": "IT213", "description": "Platform Technologies", "credit": "3.0" },
    { "year_level": "1st", "sem": "1st", "code": "IT111", "description": "Introduction to Computing", "credit": "3.0" },
    { "year_level": "1st", "sem": "1st", "code": "IT112", "description": "Computer Programming 1", "credit": "3.0" },
    { "year_level": "1st", "sem": "1st", "code": "PurCom", "description": "Purposive Communication", "credit": "3.0" },
    { "year_level": "1st", "sem": "2nd", "code": "IT121", "description": "Computer Programming 2", "credit": "3.0" },
    { "year_level": "2nd", "sem": "1st", "code": "IT213", "description": "Platform Technologies", "credit": "3.0" },
    // Add more courses here
  ];
  
  function loadCourses() {
    const container = document.getElementById("courses-container");
    const groupedCourses = {};
  
    // Group courses by year and semester
    courses.forEach(course => {
      const key = `${course.year_level} Year, ${course.sem} Semester`;
      if (!groupedCourses[key]) {
        groupedCourses[key] = [];
      }
      groupedCourses[key].push(course);
    });
  
    // Generate HTML content
    for (const [key, coursesList] of Object.entries(groupedCourses)) {
      // Create Year and Semester Header
      const yearSemDiv = document.createElement("div");
      yearSemDiv.className = "year-semester";
      yearSemDiv.innerHTML = `<h2>${key}</h2>`;
      container.appendChild(yearSemDiv);
  
      // Create Courses List
      coursesList.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.className = "course";
        courseDiv.innerHTML = `
          <strong>${course.code}</strong>: ${course.description} (${course.credit} credits)
        `;
        yearSemDiv.appendChild(courseDiv);
      });
    }
  }
  
  // Call the function to load courses
  loadCourses();
  