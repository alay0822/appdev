fetch("https://alay0822.github.io/CV_html5/HTML/CSS/SubjectsTaken/courses.json")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const coursesList = document.getElementById('courses-list');
    
    data.courses.forEach(course => {
      const courseItem = document.createElement('div');
      courseItem.classList.add('course-item');
      courseItem.innerHTML = `
        <h3>${course.code} - ${course.description}</h3>
        <p><strong>Year Level:</strong> ${course.year_level}</p>
        <p><strong>Semester:</strong> ${course.sem}</p>
        <p><strong>Credits:</strong> ${course.credit}</p>
      `;
      coursesList.appendChild(courseItem);
    });
  })
  .catch(error => {
    console.error('Error fetching the courses data:', error);
  });
