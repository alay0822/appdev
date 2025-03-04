fetch('SubjectsTaken/courses.json')
  .then(response => response.json())
  .then(data => {
    let container = document.getElementById("courses-container");

    data.courses.forEach(course => {
      let courseElement = document.createElement("p");
      courseElement.textContent = `${course.year_level} Year, ${course.sem} Sem - ${course.code}: ${course.description} (${course.credit} Credits)`;
      container.appendChild(courseElement);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));
